const express = require("express");
const Choix = require("./entities/choix.js");

function init(db) {
    const router = express.Router();
    router.use(express.json());
    
    router.use((req, res, next) => {
        console.log('API: method %s, path %s', req.method, req.path);
        console.log('Body', req.body);
        next();
    });
    
    const clic = new Choix.default(db);
    router.post("/choix", async (req, res) => {
        try{
            // recupere le corps de la requete
            const {nom} = req.body;
            if( await clic.create(nom)){ // cree donc le nom demander dans la bdd
                res.status(200).json({
                    status: 200,
                    message: "good"
                });
            }
        }catch(error){ //sinon erreur
            res.status(500).json({
                status: 500,
                message: "erreur interne",
                details: (error || "Erreur interne").toString(),
                number: 10
            });
        }
    });

    router
        .route("/choix")
        .get(async (req, res) => { // meme fonctionnement
        try {
            const choix = await clic.get();
            if (!choix)
                res.sendStatus(404); // si erreur
            else
                res.send(choix); // envoie les donnees
        }
        catch (e) {
            res.status(500).send(e);
        }
    })
    return router;
}
exports.default = init;

