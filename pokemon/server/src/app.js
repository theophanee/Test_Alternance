const cors = require('cors')
const path = require('path');
const api = require('./api.js');
const Datastore = require('nedb');

// Détermine le répertoire de base
const basedir = path.normalize(path.dirname(__dirname));
console.debug(`Base directory: ${basedir}`);

const express = require('express');
const app = express()
const session = require("express-session");

let db = {}; // charge la bdd dans data/
db.choix = new Datastore('../data/choix.db');
db.choix.loadDatabase();

app.use( cors({
    credentials: true,
    origin: 'http://localhost:3000'
}) );

app.use(session({
    secret: "technoweb rocks"
}));

app.use('/api', api.default(db));


app.on('close', () => {
});
exports.default = app;

