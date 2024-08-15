const databaseType = { 
    userType: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName){
    //logica
    console.log(`Conectado ao banco ${dataName}`)
}

async function disconnectDatabase(dataName){
    //logica
    console.log(`desconectando do banco de dados`)
}

// export default connectToDatabase

//Multiple exports
export {connectToDatabase, disconnectDatabase, databaseType}