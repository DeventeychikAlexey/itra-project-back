const authRouter = require("./authRouter");
const pageRouter = require("./pageRouter");
const developerRouter = require("./developerRouter");

module.exports = [
  { router: authRouter, path: "/auth" },
  { router: pageRouter, path: "/" },
  { router: developerRouter, path: "/developer" },
];
