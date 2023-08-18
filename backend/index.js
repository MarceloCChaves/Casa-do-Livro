const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 3000;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const bookRoutes = require("./routes/BookRoutes");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "olá mundo",
  });
});

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sstcwrd.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
