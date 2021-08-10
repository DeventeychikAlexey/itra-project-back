const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { userController } = require("../controllers");

router.get(
  "/",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" })
);

module.exports = router;
