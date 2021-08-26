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
    file.originalname = `${Date.now()}-${file.originalname}`;
    cb(null, "/images/" + file.originalname);
  },
  mute: true,
});
const upload = multer({ storage: storage });

module.exports = { upload, dbx };
