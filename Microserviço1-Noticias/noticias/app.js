const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const noticias = [
  {
    id: '1',
    titulo: 'Cão comeu o gato',
    texto: 'Numa noite escura, o cachorro Tob matou e devorou o gato Miau',
    autor: 'Anônimo',
    data: '20/05/2022'
},
{
    id: '2',
    titulo: 'Gato se vinga',
    texto: 'Num dia escuro, o gato Miau se vingou do pai do cão Tob',
    autor: 'Anônimo',
    data: '20/05/2022'
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
    status: 'OK',
    noticias: noticias
  });
});

module.exports = app;
