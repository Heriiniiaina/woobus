const mongoose = require("mongoose")
const itinSchema = mongoose.Schema({
    name: String,
    quantity: Number
})
const busScheme = mongoose.Schema({
    busNumber: {
        type: String
    },
    itineraire: [String]

})

module.exports = mongoose.model("busModel",busScheme)