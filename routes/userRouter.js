const Router = require("express").Router;
const router = new Router();
const passport = require("passport");
const { userController } = require("../controllers");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// const multer = require("multer");
// const multerDbx = require("multer-dropbox");
// const { Dropbox } = require("dropbox");
// const fetch = require("isomorphic-fetch");

// const dbx = new Dropbox({
//   accessToken: process.env.DROP_BOX_ACCESS,
//   fetch,
// });

// const storage = multerDbx(dbx, {
//   path: function (req, file, cb) {
//     try {
//       cb(null, "/images/" + Date.now() + file.originalname);
//     } catch (error) {
//       cb(error, false);
//     }
//   },
//   mute: true,
// });

// const upload = multer({ storage });
// const upload = require("../config/multer");

router.post(
  "/collections",
  passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  userController.createCollection
);

router.post(
  "/upload",
  // passport.authenticate("jwt", { session: false, failureRedirect: "/" }),
  upload.single("image"),
  userController.upload
);

module.exports = router;
