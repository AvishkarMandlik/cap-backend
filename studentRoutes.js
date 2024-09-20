const express = require("express")
const { connect, disconnect } = require("./mongoConn.js");
const Router = express.Router();
const bodyparser = require("body-parser");

Router.use(bodyparser.json())
Router.post("/checkAdmission", async(req,res)=>{

    const db = await connect();
    const collection = db.collection("admissions");

    const admission = await collection.findOne({email : req.body.email});
    let admissiondata;
    await disconnect();
    if(admission){
        if(admission.verify){
             admissiondata = {
                status:true,
                verify:true
            }
        }
        else{
             admissiondata = {
                status:true,
                verify:false
            }
        }
        res.json(admissiondata);
    }
    else{
        res.send(false);
    }

})

Router.post("/newAdmission", async(req,res)=>{

    const db = await connect();
    const collection = db.collection("admissions");
    req.body.verify = false
    
    const insertResult = await collection.insertOne(req.body);

    res.send(insertResult);
})

module.exports = Router
