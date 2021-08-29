require("dotenv").config();
require("./config/passport.js");

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const history = require("connect-history-api-fallback");
const path = require("path");

const { sequelize } = require("./db");
const routes = require("./routes");

const serveStatic = require("serve-static");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(passport.initialize());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.forEach((route) => {
  app.use("/back" + route.path, route.router);
});

// app.use(history());
app.use("/", serveStatic(path.join(__dirname, "/dist")));

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
