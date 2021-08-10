const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const { dbQueries } = require("../lib");
const bcrypt = require("bcrypt");

//Local strategy

function getLoginError(user, password) {
  if (!user || !bcrypt.compareSync(password, user.password))
    return { msg: "Login or password is wrong!" };
  return null;
}

const localStrategyOptions = {
  usernameField: "login",
  passwordField: "password",
};

const localVerifyCallback = async (login, password, done) => {
  try {
    const user = await dbQueries.getOne("users_rights_view", {
      login: login,
    });
    const error = getLoginError(user, password);
    if (error) return done(error, false);
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
    const user = await dbQueries.getOne("users_rights_view", {
      id: jwtPayload.id,
    });
    if (!user) return done(null, false);
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
  callbackURL: `${process.env.SERVER_API_URL}/auth/google/callback`,
};

const googleVerifyCallback = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    if (!profile) return done(null, false);
    let user = await dbQueries.getOne("users", {
      id_google: profile.id,
    });
    if (!user) {
      await dbQueries.insertOne("users", {
        id_google: profile.id,
        name: profile.displayName,
        id_right: 2,
      });
      user = await dbQueries.getOne("users", {
        id_google: profile.id,
      });
    }
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(new GoogleStrategy(googleStrategyOptions, googleVerifyCallback));
