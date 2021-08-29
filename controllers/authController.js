const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const { users } = require("../db");
const { utils } = require("../lib");

function findRegisterErrors({ login, password, password2, name }) {
  let errors = [];
  if (validator.isEmpty(name)) errors.push("Name is required!");
  if (!validator.isEmail(login)) errors.push("Email is not valid!");
  if (validator.isEmpty(password)) errors.push("Password is required!");
  if (!validator.isLength(password, { min: 6, max: 32 }))
    errors.push("password length has to be between 6 and 32!");
  if (password != password2 || password.length != password2.length)
    errors.push("Passwords do not equal!");
  return errors;
}
function encryptPassword(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

const authController = {
  async register({ body }, res) {
    try {
      let user = await users.findOne({ where: { login: body.login } });
      if (user) throw new Error("User already exists!");
      const errors = findRegisterErrors(body);
      if (errors.length > 0) throw new Error(errors);
      const hash = encryptPassword(body.password);
      const result = await users.create({
        login: body.login,
        password: hash,
        name: body.name,
        id_right: config.user,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async login({ user }, res) {
    try {
      if (user.blocked) throw new Error("User is blocked!");
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: "24h",
      });
      res.status(200).send({ msg: token });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async auth({ user }, res) {
    try {
      const result = (await utils.findUsers({ id: user.id }))[0];
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = authController;
