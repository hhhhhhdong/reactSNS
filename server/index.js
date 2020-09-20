const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/dev.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
};

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api/users", require("./routes/users"));
app.use("/api/posts", require("./routes/posts"));

const port = 5000;
app.listen(port, () => console.log(`Server Listening on ${port}`));
