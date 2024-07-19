const busModel = require("../models/busModels")
function pointCommun(t1,t2){
    let communs = []
    for(let i=0;i<t1.length;i++){
        let element1 = t1[i]
        if(t2.includes(element1)){
            communs.push(element1)
            break
        }
    }
    return communs
}
 const findBus =async (req,res)=>{
    const data = req.body
   try {
        const bus = await busModel.find({
            itineraire: {$all: [data.depart, data.destination] }
        })
    
        if(!bus[0]){
            const busDepart = await busModel.find({
                itineraire: data.depart
            })
            const busDest = await busModel.find({
                itineraire: data.destination
            })
            let busAlt = {}
            if(busDepart!=0 && busDest) {
                busDepart.forEach(e=>{
                    busDest.forEach(dest=>{
                        for(i=0;i<e.itineraire.length;i++){
                            if(dest.itineraire.includes(e.itineraire[i])){
                                busAlt.bus = e.busNumber
                                busAlt.toerana = e.itineraire[i]
                                break
                            }
                        }
                    })
                })
            const Alt  = await busModel.find({
                itineraire:{$all: [busAlt.toerana,data.destination]}
            }) 
            if(Alt){
                console.log(`Il n'y a pas de bus direct qui passe par votre itinéraire ! Mais il y a une option , vous devez prendre deux bus:
prend le bus ${busAlt.bus} jusqu' à l'arret ${busAlt.toerana} et puis prendre le bus ${Alt[0].busNumber} jusqu'à l'arret ${data.destination}`
                    )
            }
              
            } else {
                console.log("Il n'y a pas de bus qui passe par votre itinéraire")
            }
        }  else{
            console.log("Vous pouvez prendre le(s) bus suivant(s): ")
            console.log(bus)
          bus.forEach(element => {
            console.log(element.busNumber)
          });
        }
   } catch (error) {
        console.log("Erreur => ",error)
   }

    res.redirect("/")
}
module.exports = {
    findBus
}