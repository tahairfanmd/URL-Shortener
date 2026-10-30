const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.use("/api", urlRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
