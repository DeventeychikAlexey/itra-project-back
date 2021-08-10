const Router = require("express").Router;
const router = new Router();
const passport = require("passport");

router.get("/", (req, res, next) => {
  res.status(200).send();
});

router.get(
  "/admin",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  (req, res, next) => {
    res.status(200).send("Admin");
  }
);

module.exports = router;
