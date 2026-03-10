// 1. Criando o array de objetos
let listaClientes = [
{
nome: "Ana",
endereco: "Rua A - São Paulo",
cpf: 12345678900
},

{
nome: "Carlos",
endereco: "Rua B - São Paulo",
cpf: 98765432100
},

{
nome: "Maria",
endereco: "Rua C - São Paulo",
cpf: 45678912300
}
];

document.write("<h2>Clientes iniciais</h2>");

// 2. Mostrar clientes com forEach
listaClientes.forEach(function(cliente){

document.write(
"Nome: " + cliente.nome + "<br>" +
"Endereço: " + cliente.endereco + "<br>" +
"CPF: " + cliente.cpf + "<br><br>"

);

});


// 3. Adicionar cliente no FINAL
listaClientes.push({
nome: "João",
endereco: "Rua D - São Paulo",
cpf: 11122233344
});

document.write("<h2>Após adicionar cliente no final</h2>");

listaClientes.forEach(function(cliente){

document.write(
"Nome: " + cliente.nome + "<br>" +
"Endereço: " + cliente.endereco + "<br>" +
"CPF: " + cliente.cpf + "<br><br>"
);

});


// 4. Adicionar cliente no INÍCIO
listaClientes.unshift({
nome: "Fernanda",
endereco: "Rua E - São Paulo",
cpf: 55566677788
});

document.write("<h2>Após adicionar cliente no início</h2>");

listaClientes.forEach(function(cliente){

document.write(
"Nome: " + cliente.nome + "<br>" +
"Endereço: " + cliente.endereco + "<br>" +
"CPF: " + cliente.cpf + "<br><br>"
);

});


// 5. Contar número de clientes
document.write("<h2>Total de clientes: " + listaClientes.length + "</h2>");