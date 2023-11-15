const mongoose = require("mongoose"); //installation of mongoose
const express = require("express"); //installation of express
const cors = require("cors"); // installlation of cors-cross  origin resource sharing
const studentRoutes = require("../backend/controller/studentRoutes");
const app = express(); //instansiation

mongoose.set("strictQuery", true); //to make entries case sensitive
const uri =
  "mongodb+srv://nikhildevadiga2002:nikki19@cluster0.qbsidxw.mongodb.net/MyHighSchool";

mongoose.connect(uri); //to trigger connect event

const db = mongoose.connection; //to make connection with database
//
db.on("open", () => {
  console.log("Database connected"); //to show the database is connected
});
db.on("error", (error) => {
  console.log("error while connecting to database", error); //to show error promt
});
app.use(express.json());
app.use(cors());
app.use("/students", studentRoutes);
const port = 5000;
app.listen(port, () => {
  console.log("server listening on port", port); //listening on server port
});
