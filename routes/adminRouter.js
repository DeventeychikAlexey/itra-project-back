const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { adminMiddleware } = require("../middlewares");
const { adminController } = require("../controllers");

router.put(
  "/toggleBlocked/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.toggleBlockedUser
);

router.delete(
  "/user/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.deleteUser
);

router.post(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.createCollection
);

module.exports = router;
