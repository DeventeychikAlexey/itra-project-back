const config = require("../config/config");

const developerMiddleware = (req, res, next) => {
  if (req.user.id_right != config.developer)
    res.status(400).send({ msg: "You do not have enough permissions!" });
  next();
};

const adminMiddleware = (req, res, next) => {
  if (
    req.user.id_right != config.admin &&
    req.user.id_right != config.developer
  )
    res.status(400).send({ msg: "You do not have enough permissions!" });
  next();
};

module.exports = { developerMiddleware, adminMiddleware };
