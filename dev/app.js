import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import DataStore from 'nedb';

import Human from './models/Human';
import Humans from './models/Humans';

let app = express()
  , http_port = 3000
  , db = new DataStore({ filename: 'db.nedb' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());


// Liste de tous les humans
app.get("/humans", (req, res) => {

  let humans = new Humans(db)

  humans.fetch().then((data)=>{
    res.send(data);
  })

});

// Obtenir un human par son id
app.get("/humans/:id", (req, res) => {

  let human = new Human(db);

  human.findOne(req.params.id).then((data) => {
    res.send(data)
  })
});

// Supprimer un human par son id
app.delete("/humans/:id", (req, res) => {

  let human = new Human(db);

  human.delete(req.params.id).then((numRemoved) => {
    res.statusCode = 200;
    res.send({res: numRemoved});
  })

});


// Ajouter un human
app.post("/humans", (req, res) => {

  let human = new Human(db, req.body);

  human.insert().then((data) => {
    res.statusCode = 301;
    res.header("location", "/humans/"+data._id).end();
  });

});


// Modifier un human
app.put("/humans/:id", (req, res) => {

  let human = new Human(db, req.body);

  human.update(req.params.id).then((data) => {
    res.statusCode = 301;
    res.header("location", "/humans/"+data._id).end();
  });

});


// Lancer l'application une fois la base chargée
db.loadDatabase((err) => {
  app.listen(http_port);
  console.log("Listening on " + http_port);
});
