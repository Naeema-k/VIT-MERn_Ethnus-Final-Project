const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://shuklaasmit40:12345@cluster0.sitvndk.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

const eventRouter = require("./routes/events");
app.use("/api/events", eventRouter);
//creating our server on port 5000
app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});
