const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { developerMiddleware } = require("../middlewares");
const { developerController } = require("../controllers");

router.put(
  "/upgradeUser",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.upgradeUser
);

router.put(
  "/downgradeUser",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.downgradeUser
);

module.exports = router;
