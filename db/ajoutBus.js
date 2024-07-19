const mongoose = require("mongoose")
const busSchema = require("../models/busModels.js")

const busAjout = async () =>{
    const bus = new busSchema(
        {
        busNumber: "109",
        itineraire: [
           "Anosy","67ha","Antohomadinika","Ankazomanga","Antanimena","Ankadifotsy","Behoririka","Analamahitsy","Sabotsy Namehana"
        ]
        },
       
        
)
    await bus.save()

}
module.exports =busAjout