const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.SERVER_PORT;

app.use(express.json());
// Routes for users and products
app.use("/api/users", require("./api/users/Router"));
app.use("/api", require("./api/products/Router"));

// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => console.log("DB conn"))
//   .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

