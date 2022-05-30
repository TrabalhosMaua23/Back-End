//importando o pacote
const mongoose = require('mongoose');

//definindo o schema
const noticiaSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  texto: { type: String, required: true },
  autor: { type: String, required: true },
  data: { type: Date, required: true }
});

//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Noticia', noticiaSchema);
