const authRouter = require("./authRouter");
const baseRouter = require("./baseRouter");
const developerRouter = require("./developerRouter");
const adminRouter = require("./adminRouter");
const userRouter = require("./userRouter");

module.exports = [
  { router: authRouter, path: "/auth" },
  { router: baseRouter, path: "/" },
  { router: developerRouter, path: "/developer" },
  { router: adminRouter, path: "/admin" },
  { router: userRouter, path: "/user" },
];
