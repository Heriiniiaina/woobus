const express = require("express")
const {findBus} = require("../controllers/findController.js")
const router = express.Router()

router.post("/find",findBus)

module.exports =  router
