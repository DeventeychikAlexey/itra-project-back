const authRouter = require("./authRouter");

function middleware(req, res, next) {
  next();
}

module.exports = [
  { router: authRouter, middlewares: [middleware], path: "/auth" },
];
