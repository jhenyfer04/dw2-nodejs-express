//objetos literais no JavaScript
document.write(
  `<h4>objetos literais possuem atributos (propriedades) e metodos(funcoes)  </h4>`,
);

const pessoa = {};
document.write(typeof pessoa);

//criando um objeto
const carro = {
  //propriedades
  modelo: "gol",
  cor: "vermelho",
  //metodos
  acelerar() {
    return "Vrummmm...";
  },
  frear() {
    return "freando...";
  },
};

document.write(`<p>o modelo do carro e: ${carro.modelo}</p>`);
document.write(`<p>a cor do carro e: ${carro.cor}</p>`);
document.write(`<p>quando o carro acelera ele faz: ${carro.acelerar()}</p>`);
document.write(`<p>ativando os freios: ${carro.frear()}</p>`);

//manipulando arrays de objetos
const productsList = [
  {
    nome: "computador",
    marca: "lenovo",
    preco: 3000,
    descricao: "pc moderno com bom desempenho",
  },

  {
    nome: "tablet",
    marca: "samsung",
    preco: 2000,
    descricao: "otima velocidade de processamento",
  },

  {
    nome: "celular",
    marca: "apple",
    preco: 12000,
    descricao: "ultra resistente",
  },
];

//exibindo o array de objetos atraves dp forEach
document.write("<h4>exibindo o array de objetos atraves do forEach:</h4>");
productsList.forEach((product) => {
  document.write(`
        Produto:${product.nome} <br>
        Marca:${product.marca} <br>
        Preço:${product.preco} <br>
        Descriçao:${product.descricao} <br><br>
  `);
});


