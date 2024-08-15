//Destructuring
const { getFullName, productType} = require("./services/products")


const product = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")

async function main(){
    console.log("Carrinho compras:")
    getFullName("407", "mousepad")
    product.getFullName("408", "mousepad")
    product.getFullName("508", "mouse")
    product.getProductLabel("mousepad")

    database.connectToDatabase
    console.log(product.productType)
    console.log(config.production)
    console.log(config.client)
}

main();