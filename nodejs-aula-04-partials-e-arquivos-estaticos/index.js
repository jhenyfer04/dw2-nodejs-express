// O arquivo index.js e o arquivo principal do projeto

// Importando o MODULO do express
const express = require("express");

// Criando uma instancia do express
const app = express();

//configurando o EJS
app.set("view engine", "ejs");

//definindo a pasta "puublic" como diretorio para arquivos estaticos
app.use(express.static("public"));

//criando a rota principal do site("/")
app.get("/", function (req, res) {
  //  res.send("bem-vindo ao meu primeiro site em Node.js e Express.js");
  res.render("index");
});

//criando a rota de perfil do usuario
app.get("/perfil", (req, res) => {
  // res.send("Bem-vindo ao seu perfil!");
  res.render("perfil");
});

// rota de Clientes
app.get("/clientes", (req, res) => {
  const listaCliente = ["maria", "joao", "zezinho", "vitor"];
  res.render("clientes", {
    listaCliente: listaCliente,
  });
});

// rota de clientes-com parametros
app.get("/clientes/:cliente", (req, res) => {
  const cliente = req.params.cliente;
  res.render("detalhesCliente", {
    cliente: cliente,
  });
});

// rota de produtos
app.get("/produtos", (req, res) => {
  const listaProdutos = ["computador", "celular", "tablet", "notebook"];
  res.render("produtos", {
    // enviando variaveis para a pagina de HTML
    listaProdutos: listaProdutos,
  });
});

// rota de produtos-com parametros
app.get("/produtos/:produto", (req, res) => {
  const produto = req.params.produto;
  res.render("detalhesProduto", {
    produto: produto,
  });
});
//rota de servicços

app.get("/servicos", (req, res) => {
  const servicos = [
    {
      servico: "desenvolivimento de Websites",
      descricao: "criacao de sites com Node.js e integracao a banco de dados",
      preco: 3500,
    },

    {
      servico: "auditoria de ux/ui",
      descricao:
        " avaliaçao da usabilidade de sistemas com sugestoes de melhoria",
      preco: 1800,
    },

    {
      servico: "infraestrustura em nuvem",
      descricao: " configuraçao de servidores e hospedagens de aplicaçao",
      preco: 2900,
    },

    {
      servico: "chatbot com IA",
      descricao: "desenvolvimento de chatbot para atendimento automatico",
      preco: 2750,
    },
  ];

  res.render("servicos", {
    //enviando o array de obejtos para a pagina
    servicos: servicos,
  });
});

// Iniciando o servidor  na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log("ocorreu um erro ao iniciar o servidor!" + error);
  } else {
    console.log(
      `servidor iniciado com sucesso na endereço : http://localhost:${port}`,
    );
  }
});
