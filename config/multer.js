const multer = require("multer");
const multerDbx = require("multer-dropbox");
const { Dropbox } = require("dropbox");
const fetch = require("isomorphic-fetch");

const dbx = new Dropbox({
  accessToken: process.env.DROP_BOX_ACCESS,
  fetch,
});

const storage = multerDbx(dbx, {
  path: function (req, file, cb) {
    cb(null, "/images/" + Date.now() + file.originalname);
  },
  mute: true,
});

module.exports = multer({ storage });
