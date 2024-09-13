const express = require("express");
const { connect, disconnect } = require("./mongoConn.js");
const router = express.Router();


router.get("/verification", async (req, res) => {
    const db = await connect();
    const collection = db.collection("accounts");
    const verificationAccounts = await collection.find({verify:false}).toArray();
    console.log("found documents =>", verificationAccounts);
    await disconnect();
    res.send(verificationAccounts);
  });

module.exports = router