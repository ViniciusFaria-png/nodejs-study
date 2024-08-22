async function connectToDatabase(user, passwword){
    if(user===process.env.USERDATABASE && password ===process.env.PASSWORDDATABASE){
        console.log("Conexao com banco de dados estavelecida")
    } else{
        console.log("Falha de login, nao foi possivel se conectar ao servidor")
    }
}

export default connectToDatabase