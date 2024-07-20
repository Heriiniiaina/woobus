const busModel = require("../models/busModels");

const findBus = async (req, res) => {
    const data = req.body;
   
    try {
        const bus = await busModel.find({
            itineraire: { $all: [data.depart, data.destination] }
        });

        if (!bus[0]) {
            const busDepart = await busModel.find({
                itineraire: data.depart
            });
            const busDest = await busModel.find({
                itineraire: data.destination
            });
            let busAlt = {};
            if (busDepart.length !== 0 && busDest.length !== 0) {
                busDepart.forEach(e => {
                    busDest.forEach(dest => {
                        for (let i = 0; i < e.itineraire.length; i++) {
                            if (dest.itineraire.includes(e.itineraire[i])) {
                                busAlt.bus = e.busNumber;
                                busAlt.toerana = e.itineraire[i];
                                break;
                            }
                        }
                    });
                });
                const Alt = await busModel.find({
                    itineraire: { $all: [busAlt.toerana, data.destination] }
                });
                if (Alt.length !== 0) {
                    req.session.resultat ={

                        itin:`Il n'y a pas de bus direct qui passe par votre itinéraire ! Mais il y a une option , vous devez prendre deux bus: prendre le bus ${busAlt.bus} jusqu'à l'arrêt ${busAlt.toerana} et puis prendre le bus ${Alt[0].busNumber} jusqu'à l'arrêt ${data.destination}`,
                        busUnique: false,
                        liste: []
                    } 
                }
            } else {
                req.session.resultat = {

                    itin:"Il n'y a pas de bus qui passe par votre itinéraire",
                    busUnique: false,
                    liste: []
                }
            }
        } else {
            let listes = []
            bus.map(element => listes.push(element.busNumber))
            
            req.session.resultat = {
                itin: `Vous pouvez prendre le(s) bus suivant(s): `,
                busUnique: true,
                liste:  listes
            }
            
        }
    } catch (error) {
        console.log("Erreur => ", error);
    }

    res.redirect("/bus");
};

module.exports = {
    findBus
};
