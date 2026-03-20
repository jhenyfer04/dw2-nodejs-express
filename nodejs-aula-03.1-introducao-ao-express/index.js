// O arquivo index.js e o arquivo principal do projeto

// Importando o MODULO do express
const express = require ("express")

// Criando uma instancia do express
const app = express();

//configurando o EJS
app.set('view engine', 'ejs');

//criando a rota principal do site("/")
app.get("/", function(req, res){
  //  res.send("bem-vindo ao meu primeiro site em Node.js e Express.js");
 res.render("index");
})

//criando a rota de perfil do usuario
app.get("/perfil", function (req, res){
   // res.send("Bem-vindo ao seu perfil!");
 res.render("perfil");
});

app.get("/clientes", function (req, res){
 res.render("clientes");
});

app.get("/produtos", function (req, res){
 res.render("produtos");
});

app.get("/servicos", function (req, res){
 res.render("servicos");
});


// Iniciando o servidor  na porta 8080
const port = 8080
app.listen(port, (error) => {
    if(error){
        console.log("ocorreu um erro ao iniciar o servidor!" + error);
    } else {
        console.log(`servidor iniciado com sucesso na endereço : http://localhost:${port}`);
    }
});






