//precisa especificar a extensao do arquivo, no caso o .js
// import connectToDatabase from "./utils/database.js"

//Import all
// import * as database from "./utils/database.js"

// Destructuring
import { disconnectDatabase, connectToDatabase, databaseType } from "./utils/database.js"

disconnectDatabase()

// database.connectToDatabase("my-database")
// database.disconnectDatabase()

// connectToDatabase("my-database");