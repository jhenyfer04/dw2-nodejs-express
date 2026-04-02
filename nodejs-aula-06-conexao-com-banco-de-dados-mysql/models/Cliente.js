import sequelize, { Sequelize } from "sequelize"
import connection from"../config/sequelize-config.js";


//criando o model
//o metodo define() do sequelize cria uma tabela no BD
const Cliente = connection.define("clientes",{
nome: {
    type: Sequelize.STRING,
    allowNull: false,
},
cpf:{
    type: Sequelize.STRING,
    allowNull: false,
},
enderco: {type : Sequelize.STRING,
    allowNull: false,
},

});

// o metodo sync()sicroniza os dados com o banco
// force: false -> nao recriar a tabela caso ela ja existia
Cliente.sync({ force: false});
export default Cliente;