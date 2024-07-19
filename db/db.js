const mongoose = require("mongoose")

const dbConnect = async ()=>{
    try{
        const con = await mongoose.connect("mongodb://localhost:27017/")
        console.log("Database connected")
    }catch(err){
        console.log("Erreur de connexion database => ",err)
    }
}
module.exports = dbConnect