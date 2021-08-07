require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
