import chalk from "chalk";
import logsymbols from "log-symbols"

console.log(chalk.blue.bgGreen.italic("Hello my package"))
console.log(chalk.blue.bgCyan.bold("Hello my package"))

console.log(logsymbols.success, chalk.blue.bold("Servidor iniciado com sucesso"))
console.log(logsymbols.error, chalk.red.bold(" Servidor náo iniciado com sucesso"))