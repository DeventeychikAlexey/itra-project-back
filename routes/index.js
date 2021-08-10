const authRouter = require("./authRouter");
const pageRouter = require("./pageRouter");

const middleware = (_, __, next) => next();

module.exports = [
  { router: authRouter, middlewares: [middleware], path: "/auth" },
  { router: pageRouter, middlewares: [middleware], path: "/" },
];
