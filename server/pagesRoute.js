const express = require("express");
const router = express.Router();
router.use(express.static("public"));


router.get("/studentAccount", async (req, res) => {
    res.sendFile(
        __dirname + "/public/StudentDashboard.html",
    )    
})

router.get("/teacherAccount", async (req, res) => {
    res.sendFile(__dirname + "/public/TeacherDashboard.html",
    )
})

router.get("/capAccount", async (req,res) =>{
    res.sendFile(__dirname + "/public/cappage.html",
    )
})

module.exports = router;