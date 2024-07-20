const mongoose = require("mongoose")
const busSchema = require("../models/busModels.js")

const busAjout = async () =>{
    const bus1 = new busSchema(
        {
        busNumber: "135",
        itineraire: [
     "Soamanandrariny","Mahazo","Ankadindramamy","Ampasapito","Avaradoha","Ambohitrakely","Betongolo","Ampahibe","Ampandrana","Antsakaviro","Ambanidia","Manakambahiny","Tsimbazaza","Ankaditoha","Soanierana","Namontana","Anosibe","Anosy","Ambondrona","Ambodifilao","Soarano","Behoririka","Andravoahangy"
        ]
        })
        const bus2 = new busSchema(
            {
            busNumber: "147 D",
            itineraire: [
         "67ha","Antohomadinika","Ankazomanga","Antanimena","Ankadifotsy","Andravohangy","Besarety","Ampasapito","Mahazo","Ambatomaro","Ankerana","Nanisana","Ste Akanjo","Anosy","Betongolo","Ampefiloha","Andavamamba","Ampandrana","Ambohijatovo"
            ]
            })
    await bus1.save()
    await bus2.save()
}
module.exports =busAjout