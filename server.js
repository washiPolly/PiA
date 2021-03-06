const express = require("express");
const mongoose = require("mongoose"); // Added 7-10-2020
const routes = require("./routes");
const path = require("path");
const config = require("config");

const fileUpload = require("express-fileupload");

// const routes = require("./routes"); // Aadded 7-10-2020
const PORT = process.env.PORT || 3001;
const app = express();

app.use(fileUpload());

//Upload Endpoint from React
app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

//for Postman testing - added 7-14-20
// app.get("/", (req, res) => res.send("API Running"));

// Middleware - added 7-10-2020
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: false }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// local
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/personalinventory"); // Aadded 7-10-2020
//Heroku

//-----start here for mLab's mongoDB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://server:server123@ds237713.mlab.com:37713/heroku_nlrfh7w2"
); // Aadded 7-10-2020


// Add routes, both API and view

mongodb: app.use(routes);

app.use(require("./routes/api"));



app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
