const sequelize = require('./db')

async function initDB() {
    try{
        await sequelize.authenticate();
        console.log("Conexão realizada com sucesso!");
        
        //quando habilito o force como true ele exclui todos os dados e tabelas do banco a cada conexão
        //mudar quando for levado para produção
        await sequelize.sync({force: true})
        console.log("Models ok")
    }catch(error){
        console.log(error)
    }   
}

module.exports = initDB;