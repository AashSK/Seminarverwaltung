const express = require("express");
const router = express.Router();
const seminars  = require("../models/seminars.js");
const seminare = seminars.array;
const  path  = require("path");
//console.log(seminare);

router.get("/",(request,response)=>{
    response.render("dashboard");
});

router.get("/seminarliste",(request,response)=>{
    response.render("seminarliste",{seminare: seminare});
});
router.get("/seminardetail",(request,response)=>{
    response.render("seminardetail");
});
router.get("/seminarleiter",(request,response)=>{
    response.render("seminarleiter");
});
router.get("/seminarneu",(request,response)=>{
    response.render("seminarneu");
});

router.use((req,res)=>{
    res.render("404");
    res.end();
});

module.exports = router;