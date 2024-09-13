const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const teacher = require("./teacherRoutes.js");
const cap  = require("./capRoutes.js");
const student = require("./studentRoutes.js");

app.use("/teacher", teacher);
app.use("/cap", cap);
app.use("/student",student);

require("dotenv").config();
const { connect, disconnect } = require("./mongoConn.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  if (req.body.role === "student") {
    const db = await connect();
    const collection = db.collection("accounts");

    const insertResult = await collection.insertOne(req.body);
    console.log("Inserted documents =>", insertResult);
    await disconnect();
    res.send(insertResult);
  } else if (req.body.role === "teacher") {
    req.body.verify = false;
    const db = await connect();
    const collection = db.collection("accounts");

    const insertResult = await collection.insertOne(req.body);
    console.log("Inserted documents =>", insertResult);
    await disconnect();
    res.send(insertResult);
  } else {
    res.send("Not inserted");
  }
});

app.listen(3000, () => {
  console.log("Sever listening on Port 3000");
});
