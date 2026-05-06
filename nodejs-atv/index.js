// Importando o Express
//const express = require("express")
import express from "express";


import ClienteController from "./controllers/ClienteController.js"
import TabelaController from "./controllers/TabelaController.js"
import PerfilController from "./controllers/PerfilController.js"

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//ativando o uso das rotas
app.use("/", ClienteController);
app.use("/",TabelaController);
app.use("/", PerfilController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})


const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})