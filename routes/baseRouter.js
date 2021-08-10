const Router = require("express").Router;
const router = new Router();

router.get("/", (req, res, next) => {
  res.status(200).send();
});

module.exports = router;
