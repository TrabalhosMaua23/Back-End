const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const noticias = [
  {
    id: '1',
    titulo: 'Titulo da noticia',
    texto: 'Texto da noticia',
    autor: 'Autor da noticia',
    data: '01/01/2020'
},
{
    id: '2',
    titulo: 'Titulo da noticia 2',
    texto: 'Texto da noticia 2',
    autor: 'Autor da noticia 2',
    data: '10/01/2020'
}
]

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  next();
})

app.post('api/noticias', (req, res, next) => {
  const noticia = req.body;
  console.log(noticia);
  res.status(201).json({mensagem: 'Noticia inserida'});
});

app.use('/api/noticias', (req, res, next) => {
  res.status(200).json({
    mensagem: 'Tudo OK',
    noticias: noticias
  });
});

module.exports = app;
