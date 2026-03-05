// declarando e exibindo items de um array
let produtos =[];
document.write(typeof(produtos));

let products=["Computador","Notebook","Celular","Tablet"];
document.write(`<p>${products}</p>`)

document.write(`<p>Exibindo os elementos do vetor atraves do indice:</p>`)

document.write(`<p>${products[0]}</p>`)
document.write(`<p>${products[1]}</p>`)
document.write(`<p>${products[2]}</p>`)
document.write(`<p>${products[3]}</p>`)

document.write("<p>exibindo elementos do vetor atraves do forEach:</p>");
products.forEach((product)=>{
    document.write(`<p>${product}</p>`);
})

document.write("<p>exibindo elementos do vetor atraves do forEach com os indices:</p>",
);

products.forEach((product, i)=>{
    document.write(`<p>${i+1} - ${product}</p>`);
});

//metodos de manipulaçao de vetores 
let frutas = ['Laranja', 'maça', 'Banana']
document.write(`<p>nossa lista de frutas e: ${frutas}</p>`)
frutas[3] = 'Morango';
document.write(`<p> Agora nossa lista de frutas e: ${frutas}</p>`)

document.write(`<h4> o metodo PUSH - insere um novo elemento no FINAL do vetor.</h4>`)
frutas.push('Abacaxi');
document.write(`<p> Agora nossa lista de frutas e: ${frutas}</p>`)

document.write(`<h4>  o metodo UNSHIFT - insere um novo elemento no INICIO do vetor</h4>`)
frutas.unshift('pera');
document.write(`<p> Agora nossa lista de frutas e: ${frutas}</p>`)

//como contar os elementos de um vetor - metodo LENGTH
const items = frutas.length
document.write(`<p> na nossa lista temos ${items} frutas.</p>`)
