const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const noticias = {};
contador = 0;

app.get('/noticias', (req, res) => {
    res.send(noticias);
});

app.post('/noticias', (req, res) => {
    contador  ++;
    const {titulo, texto, autor, data} = req.body;
    noticias[contador] = {
        contador, texto, titulo, autor, data
    }
    res.status(200).send(noticias[contador]);
});

app.listen(4000, () => {
    console.log('Noticias. Porta 4000')
})