const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("We are on Home");
});

//connect mongodb
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

app.listen(3000, () => console.log("Port Connected Sucessfully"));
