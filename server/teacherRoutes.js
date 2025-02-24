const express = require("express");
const router = express.Router();



router.post("/InternalMarkEntry", async(req,res)=>{

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


router.get("/InternalMark", async(req,res)=>{
    const db = await connect();

    const collection = db.collection("InternalMarks");
    const internalMark = await collection.find({subName:req.params.subName});

    res.send(internalMark);
    res.json({
        status:true,
        message:"Internal Marks fetch Successfully",
        data:internalMark
    });
});


module.exports = router

