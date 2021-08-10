const Router = require("express").Router;
const router = new Router();
const { authController } = require("../controllers");
const passport = require("passport");

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.login
);

router.post("/register", authController.register);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: "profile",
    session: false,
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
  }),
  authController.login
);

module.exports = router;
