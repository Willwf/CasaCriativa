//  Usei o express para criar e configurar meu servidor
 const express = require('express');
 const server = express();

//  Configurar arquivos estáticos (Css, scripts e imagens)
server.use(express.static('public'));


// Criei uma rota
// E capturo o pedido do cliente para responder
 server.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
 });

// Liguei meu servidor na porta 3000
 server.listen(3000);