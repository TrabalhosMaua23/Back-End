const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const noticias = [];
contador = 0;
const cors = require("cors");
app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
//     next();
//   })

app.get('/api/noticias', (req, res) => {
    res.json({noticias});
});


app.post('/api/noticias', (req, res) => {
    contador++;
    const { titulo, texto, autor, data } = req.body;
    noticias.push ({
        contador, texto, titulo, autor, data
    });
    res.status(200).json({noticias});
});



app.listen(3000, () => {
    console.log('Noticias. Porta 3000')
});
