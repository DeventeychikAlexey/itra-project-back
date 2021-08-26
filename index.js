require("dotenv").config();
require("./config/passport.js");

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const path = require("path");

const { sequelize } = require("./db");
const routes = require("./routes");
const serveStatic = require("serve-static");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

app.use("/", serveStatic(path.join(__dirname, "/dist")));

routes.forEach((route) => {
  app.use("/back" + route.path, route.router);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
