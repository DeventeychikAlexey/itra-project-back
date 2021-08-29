const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { userController } = require("../controllers");

const { upload } = require("../config/dropbox");

// Collections
router.post(
  "/collections",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.createCollection
);
router.put(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.updateCollection
);
router.delete(
  "/collection/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.deleteCollection
);

// Likes
router.get(
  "/liked/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.getLikedItem
);
router.put(
  "/like/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.likeItem
);
router.put(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.unlikeItem
);

// Items
router.post(
  "/item",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.createItem
);

router.delete(
  "/item/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.deleteItem
);

router.put(
  "/item/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.updateItem
);

// Images
router.post(
  "/image",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  upload.single("image"),
  userController.uploadImage
);

router.delete(
  "/image/:collectionId",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.removeImage
);

// Comments
router.post(
  "/comment/item/:id",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.createComment
);

module.exports = router;
