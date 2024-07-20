const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const dbConnect = require("./db/db.js");
const findRoute = require("./routes/findRoute.js");
const busAjout = require("./db/ajoutBus.js");

const app = express();


dbConnect();


app.set("view engine", "ejs");


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
    secret: '1234', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


app.use(express.static("public"));


app.use("", findRoute);




// Démarrer le serveur
app.listen(2000, () => {
    console.log("App running on port 2000");
});
