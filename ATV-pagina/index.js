const express = require("express"); 

const app = express();

// Iniciando o servidor  na porta 8080
const port = 8080
app.listen(port, (error) => {
    if(error){
        console.log("ocorreu um erro ao iniciar o servidor!" + error);
    } else {
        console.log(`servidor iniciado com sucesso na endereço : http://localhost:${port}`);
    }
});

//configurando o EJS
app.set('view engine', 'ejs');

//criando a rota principal do site("/")
app.get("/", function(req, res){

 res.render("index");
})

//criando a rota de perfil do usuario
app.get("/perfil", (req, res) =>{
 
 res.render("perfil");
});
