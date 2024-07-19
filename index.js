const express = require("express")
const bodyParser = require("body-parser")
const dbConnect = require("./db/db.js")
const ajoutBus = require("./db/ajoutBus.js")
const findRoute = require("./routes/findRoute.js")
const app = express()
dbConnect()

app.set("view engine","ejs")
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("",findRoute)

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen(2000,()=>{
    console.log("App runining on port 2000")
})