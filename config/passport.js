const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const bcrypt = require("bcrypt");

const config = require("./config");
const { users } = require("../db");

//Local strategy

function getLoginError(user, password) {
  if (!user || !bcrypt.compareSync(password, user.password))
    return "Login or password is wrong!";
  return null;
}

const localStrategyOptions = {
  usernameField: "login",
  passwordField: "password",
};

const localVerifyCallback = async (login, password, done) => {
  try {
    const user = await users.findOne({ where: { login: login } });
    const error = getLoginError(user?.dataValues, password);
    if (error) throw new Error(error);
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(new LocalStrategy(localStrategyOptions, localVerifyCallback));

//Jwt strategy

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_KEY,
};

const jwtVerifyCallback = async (jwtPayload, done) => {
  try {
    const user = await users.findOne({ where: { id: jwtPayload.id } });
    if (!user) return done(null, false);
    if (user.blocked) throw new Error("Blocked");
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(new JwtStrategy(jwtStrategyOptions, jwtVerifyCallback));

//Google strategy

const googleStrategyOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET_KEY,
  callbackURL: `${process.env.SERVER_API_URL}/back/auth/google/callback`,
};

const googleVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    if (!profile) return done(null, false);
    let user = await users.findOne({ where: { id_google: profile.id } });
    if (user?.dataValues?.blocked) throw new Error("Blocked");
    if (!user) {
      user = await users.create({
        id_google: profile.id,
        name: profile.displayName,
        id_right: config.user,
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(new GoogleStrategy(googleStrategyOptions, googleVerifyCallback));

// Facebook

const facebookStrategyOptions = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_SECRET_KEY,
  callbackURL: `${process.env.SERVER_API_URL}/back/auth/facebook/callback`,
};

const facebookVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    if (!profile) return done(null, false);
    let user = await users.findOne({ where: { id_facebook: profile.id } });
    if (user?.dataValues?.blocked) throw new Error("Blocked");
    if (!user) {
      user = await users.create({
        id_facebook: profile.id,
        name: profile.displayName,
        id_right: config.user,
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(
  new FacebookStrategy(facebookStrategyOptions, facebookVerifyCallback)
);
