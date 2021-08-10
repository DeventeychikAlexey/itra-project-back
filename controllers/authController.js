const { dbQueries } = require("../lib");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

function findRegisterErrors({ login, password, password2, name }) {
  let errors = [];
  if (validator.isEmpty(name)) errors.push({ msg: "Name is required!" });
  if (!validator.isEmail(login)) errors.push({ msg: "Email is not valid!" });
  if (validator.isEmpty(password))
    errors.push({ msg: "Password is required!" });
  if (!validator.isLength(password, { min: 6, max: 32 }))
    errors.push({ msg: "password length has to be between 6 and 32!" });
  if (password != password2 || password.length != password2.length)
    errors.push({ msg: "Passwords do not equal!" });
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
      const errors = findRegisterErrors(body);
      if (errors.length > 0) res.status(400).send({ errors });
      const hash = encryptPassword(body.password);
      const result = await dbQueries.insertOne("users", {
        login: body.login,
        password: hash,
        name: body.name,
        id_right: 2,
      });
      res.status(200).send({ msg: result });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
  async login({ user }, res) {
    try {
      const token = jwt.sign(
        { id: user.id, name: user.name },
        process.env.SECRET_KEY,
        {
          expiresIn: "24h",
        }
      );
      res.status(200).send({ msg: token });
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

module.exports = authController;
