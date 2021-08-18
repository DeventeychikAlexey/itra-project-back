const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { userController } = require("../controllers");

router.post(
  "/collections",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.createCollection
);

router.get(
  "/collections",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.getCollections
);

module.exports = router;
