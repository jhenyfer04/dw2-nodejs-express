//classes no javascript

//nome de classes devem iniciar com a primeira letra maiuscula
class Carro{
    //defenido os atributos
    constructor(marca, modelo, ano){
        //this e uma referencia as instancias que serao criadas atraves dessa classe 
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
     
    //definido os metodos
    buzinar(){
        return "beep!, beep!";
    }
}
 
//instanciando objetos
const carroPopular = new Carro("Fiat", "Uno","2012");

document.write(`<p>o carro ${carroPopular.marca} modelo ${carroPopular.modelo}
 e do ano ${carroPopular.ano} e quando buzinar faz ${carroPopular.buzinar()}</p>`,);


