const express = require("express")
const { connect, disconnect } = require("./mongoConn.js");
const Router = express.Router();
const bodyparser = require("body-parser");

Router.use(bodyparser.json())
Router.post("/checkAdmission", async(req,res)=>{

    const db = await connect();
    const collection = db.collection("admissions");

    const admission = await collection.findOne({email : req.body.email});
    if(admission){
        res.send(true);
    }
    else{
        res.send(false);
    }

})


module.exports = Router
