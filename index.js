require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const passport = require("passport");
require("./config/passport.js");
const { sequelize } = require("./db");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

routes.forEach((route) => {
  app.use(route.path, route.router);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
