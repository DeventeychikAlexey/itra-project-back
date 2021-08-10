const developerMiddleware = (req, res, next) => {
  if (req.user.right_name != "developer")
    res.status(400).send("You do not have enough permissions!");
  next();
};

const adminMiddleware = (req, res, next) => {
  if (req.user.right_name != "admin" && req.user.right_name != "developer")
    res.status(400).send("You do not have enough permissions!");
  next();
};

module.exports = { developerMiddleware, adminMiddleware };
