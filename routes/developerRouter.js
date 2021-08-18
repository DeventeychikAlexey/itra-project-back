const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { developerMiddleware } = require("../middlewares");
const { developerController } = require("../controllers");

router.put(
  "/upgradeUser/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.upgradeUser
);

router.put(
  "/downgradeUser/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.downgradeUser
);

router.put(
  "/toggleBlocked/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.toggleBlockedUser
);

router.delete(
  "/delete/user/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  developerMiddleware,
  developerController.deleteUser
);

module.exports = router;
