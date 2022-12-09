const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const multer = require("multer");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(multer().any());

mongoose.connect(process.env.MONGO_URL ||"mongodb+srv://soumya-db:afdbyZgt3CyQporD@cluster0.gvqtfzu.mongodb.net/TechRevTask",{ useNewUrlParser: true })
  .then(() => console.log("MongoDb is connected successfully"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, () =>
  console.log("Express App Running On Port 3000")
);
