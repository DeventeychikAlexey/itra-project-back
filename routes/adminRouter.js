const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { adminMiddleware } = require("../middlewares");
const { adminController } = require("../controllers");

// Users
router.delete(
  "/user/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.deleteUser
);
router.put(
  "/toggleBlocked/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.toggleBlockedUser
);

// Collections
router.put(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminController.updateCollection
);
router.delete(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.deleteCollection
);
router.post(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.createCollection
);

// Items
router.post(
  "/item/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  adminMiddleware,
  adminController.createItem
);

module.exports = router;
