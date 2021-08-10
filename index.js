require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const passport = require("passport");
require("./config/passport.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

routes.forEach((route) => {
  app.use(route.path, ...route.middlewares, route.router);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
