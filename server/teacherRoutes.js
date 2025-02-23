const express = require("express");
const router = express.Router();



Router.post("/InternalMarkEntry", async(req,res)=>{

    const db = await connect();
    const collection = db.collection("InternalMarks");
    const internalMarkEntry = await collection.insertOne(req.body);

    res.send(internalMarkEntry);
    res.json({
        status:true,
        message:"Internal Marks Entered Successfully",
        data:internalMarkEntry
    });
})


module.exports = router

