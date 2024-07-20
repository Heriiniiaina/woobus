const express = require("express")
const {findBus} = require("../controllers/findController.js")
const router = express.Router()
let unique = false
router.post("/find",findBus)
router.get("/",(req,res)=>{

    res.render("index",{
        unique: unique
    })
})
router.get("/bus",(req,res)=>{
  if(req.session.resultat.busUnique)
     unique = true
    const result = req.session.resultat
    res.render("index",{
        result: result,
        unique: unique
    })
    console.log("resu=> ",result)
})
module.exports =  router
