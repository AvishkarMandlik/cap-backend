//import statements
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const teacher = require("./teacherRoutes.js");
const cap = require("./capRoutes.js");
const student = require("./studentRoutes.js");
const pages = require("./pagesRoute.js");

require("dotenv").config();
const { connect, disconnect } = require("./mongoConn.js");

//middlewares
app.use("/teacher", teacher);
app.use("/cap", cap);
app.use("/student", student);
app.use("/pages", pages);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

//routes
app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.post("/signup", async (req, res) => {
  const db = await connect();
  const collection = db.collection("accounts");
  const checkemail = await collection.findOne({ email: req.body.email });
  if (checkemail) {
    return res.json({
      success: false,
      message: "Email Already Exists",
    });
  }
  if (req.body.role === "student") {
    const db = await connect();
    const collection = db.collection("StudentAccounts");
    const insertResult = await collection.insertOne(req.body);
    await disconnect();
    res.redirect("./pages/studentAccount");
  } else if (req.body.role === "teacher") {
    req.body.verify = false;
    const db = await connect();
    const collection = db.collection("TeacherAccounts");
    const insertResult = await collection.insertOne(req.body);
    await disconnect();
    res.json({
      success: true,
      message: "Account Creation Request Sent wait for verification",
    });
  } else if (req.body.role === "cap") {
    req.body.verify = false;
    const db = await connect();
    const collection = db.collection("CapAccounts");
    const insertResult = await collection.insertOne(req.body);
    await disconnect();
    res.json({
      success: true,
      message: "Account Creation Request Sent wait for verification",
    });
  } else {
    res.json({
      success: false,
      message: "Some Error Occured Try Again Later",
    });
  }
});

app.post("/signin", async (req, res) => {
  const db = await connect();
  if ((req.body.role = "student")) {
    const collection = db.collection("StudentAccounts");
    const checkemail = await collection.findOne({
      mobilenumber: req.body.mobilenumber,
      password: req.body.password,
    });
  }
  if ((req.body.role = "teacher")) {
    const collection = db.collection("TeacherAccounts");
    const checkemail = await collection.findOne({
      mobilenumber: req.body.mobilenumber,
      password: req.body.password,
    });
  }
  if ((req.body.role = "cap")) {
    const collection = db.collection("CapAccounts");
    const checkemail = await collection.findOne({
      mobilenumber: req.body.mobilenumber,
      password: req.body.password,
    });
  }

  if (checkemail) {
    const sessionToken = "unique_session_token";

    // Set the token as a cookie
    res.cookie("session_token", sessionToken, {
      httpOnly: true, // Prevents JavaScript access to the cookie
      secure: true, // Use only in HTTPS environments
      maxAge: 2 * 60 * 1000, // 1 day expiration
    });

    res.json({ message: "Login successful", success: true });
  } else {
    res.status(401).json({ message: "Invalid credentials", success: false });
  }
});

app.get("/check-session", (req, res) => {
  const sessionToken = req.cookies.session_token;

  // Replace this with your session verification logic
  if (sessionToken === "unique_session_token") {
    res.json({ loggedIn: true });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("session_token");
  res.json({ message: "Logged out" });
});

//server
app.listen(3000, () => {
  console.log("Sever listening on Port 3000");
});
