require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Noticia = require('./models/Noticia');

const mongoose = require ('mongoose')
app.use(bodyParser.json());
const noticias = [];
contador = 0;
const cors = require("cors");
const { model } = require('mongoose');
app.use(cors());

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_CLUSTER,
    MONGODB_HOST,
    MONGODB_DATABASE
  } = process.env

mongoose.connect(`mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}.${MONGODB_HOST}.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Conexão OK")
  })
  .catch((e) => {
    console.log("Conexão NOK: " + e)
  })

  app.get('/api/noticias', (req, res, next) => {
    Noticia.find().then((documents) => {
      res.status(200).json({
        mensagem: 'Tudo OK',
        noticias: documents
      });
    })
  });


app.post('/api/noticias', (req, res, next) => {
    const noti = new Noticia (req.body)
    // const cliente = new Cliente({
    //   nome: req.body.nome,
    //   fone: req.body.fone,
    //   email: req.body.email
    // })
    noti.save().then(notiInserido => {
      res.status(201).json({
        mensagem: 'Cliente inserido',
        id: notiInserido._id
      });
    })
  });
  



app.listen(3000, () => {
    console.log('Noticias. Porta 3000')
});
