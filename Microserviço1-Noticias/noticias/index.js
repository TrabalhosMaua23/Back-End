const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const noticias = {};
contador = 0;

app.get('/api/noticias', (req, res) => {
    res.send(noticias);
});

app.post('/api/noticias', (req, res) => {
    contador  ++;
    const {titulo, texto, autor, data} = req.body;
    noticias[contador] = {
        contador, texto, titulo, autor, data
    }
    res.status(200).send(noticias[contador]);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    next();
  })

app.listen(4000, () => {
    console.log('Noticias. Porta 4000')
})