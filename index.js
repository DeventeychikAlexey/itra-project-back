require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes.forEach((route) => {
  app.use(route.path, ...route.middlewares, route.router);
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
