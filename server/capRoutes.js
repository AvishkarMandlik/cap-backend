const express = require("express");
const { connect, disconnect } = require("./mongoConn.js");
const router = express.Router();


router.get("/Teacherverification", async (req, res) => {
    const db = await connect();
    const collection = db.collection("TeacherAccounts");
    const verificationAccounts = await collection.find({verify:false}).toArray();
    console.log("found documents =>", verificationAccounts);
    await disconnect();
    res.send(verificationAccounts);
  });

router.get("/Admissionverification", async (req, res) => {
    const db = await connect();
    const collection = db.collection("Admissions");
    const verificationAccounts = await collection.find({verify:false}).toArray();
    console.log("found documents =>", verificationAccounts);
    await disconnect();
    res.send(verificationAccounts);
  });


router.put("/verifyTeacher", async (req,res) => {
  const db = await connect();
  const collection = db.collection("TeacherAccounts");
  const updateResult = await collection.updateOne({email:req.body.email},{$set:{verify:true}});
  res.send(updateResult)
})

router.put("/verifyAdmission", async (req,res) => {
  const db = await connect();
  const collection = db.collection("Admissions");
  const updateResult = await collection.updateOne({email:req.body.email},{$set:{verify:true}});
  res.send(updateResult)
})


module.exports = router