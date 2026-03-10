
// 1 – Função simples
function dados(){
document.getElementById("r1").innerHTML =
"Nome: Jhenyfer | Idade: 18 | Cidade: São Paulo";
}

dados();


// 2 – Função com parâmetros
function divisao(num1, num2){

let resultado = num1 / num2;

document.getElementById("r2").innerHTML =
"O resultado da divisão foi: " + resultado;

}

divisao(10,2);


// 3 – Função com retorno
function multiplicar(a,b,c){

return a * b * c;

}

let mult = multiplicar(2,3,4);

document.getElementById("r3").innerHTML =
"Resultado da multiplicação: " + mult;


// 4 – Função com mais de um retorno
function verificarIdade(idade){

if(idade >= 18){
return "Maior de idade";
}else{
return "Menor de idade";
}

}

document.getElementById("r4").innerHTML =
"Situação: " + verificarIdade(20);


// 5 – Função anônima
let media = function(n1,n2){

let m = (n1+n2)/2;

if(m <= 5){
return "Reprovado";
}else{
return "Aprovado";
}

}

document.getElementById("r5").innerHTML =
"Resultado do aluno: " + media(6,7);


// 6 – Arrow function
let triplo = (numero) => numero * 3;

document.getElementById("r6").innerHTML =
"O triplo do número é: " + triplo(5);


// 7 – Arrow function com mais parâmetros
let soma = (a,b,c,d) => a+b+c+d;

document.getElementById("r7").innerHTML =
"A soma dos números é: " + soma(1,2,3,4);