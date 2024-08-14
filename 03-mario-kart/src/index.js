const Character = require('./characters')

// Personagens
const character1 = new Character("Mario", 4, 3, 3)
const character2 = new Character("Luigi", 3, 3, 4)
const character3 = new Character("Peach", 4, 3, 3)
const character4 = new Character("Bowser", 4, 3, 3)
const character5 = new Character("Yoshi", 4, 3, 3)
const character6 = new Character("Donkey Kong", 4, 3, 3)

// Dado
async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}

//Funcao para obter um "bloco" aleatorio para a corrida
async function getRandomBlock(){
    let random = Math.random()
    let result 

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
            break;
    }

    return result
}

async function diceResult(character, result, block, atribute){
    console.log(`${character} 🎲 rolou um dado de ${block} ${result} + ${atribute} = ${result+atribute}`)
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        let block =  await getRandomBlock()
        console.log(`Bloco: ${block}`)

        //rolar os dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //teste de habilidade
        let testSkill1 = 0
        let testSkill2 = 0

        if(block == "RETA"){
            testSkill1 = diceResult1 + character1.speed
            testSkill2 = diceResult2 + character2.speed

            diceResult(character1.name, diceResult1, "velocidade", character1.speed)
            diceResult(character2.name, diceResult2, "velocidade", character2.speed)
        }
        if(block == "CURVA"){
            testSkill1 = diceResult1 + character1.handling
            testSkill2 = diceResult2 + character2.handling
            diceResult(character1.name, diceResult1, "curva", character1.handling)
            diceResult(character2.name, diceResult2, "curva", character2.handling)
        }
        if(block == "CONFRONTO"){
            let powerResult1 = diceResult1 + character1.power
            let powerResult2 = diceResult2 + character2.power

            console.log(`${character1.name} confrontou com ${character2.name}!🥊`)
            diceResult(character1.name, diceResult1, "poder", character1.power)
            diceResult(character2.name, diceResult2, "poder", character2.power)

            //IFs ternários
            // character2.pontos -=
            // powerResult1 > powerResult2 && character2.pontos > 0 ? 1 : 0

            // character1.pontos -=
            // powerResult2 > powerResult1 && character1.pontos > 0 ? 1 : 0

            //Condicao dupla
            if(powerResult1 > powerResult2 && character2.pontos){
                console.log(`${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto! 🐢`)
                character2.removePoints(1)
            }

            if(powerResult2 > powerResult1 && character1.pontos){
                console.log(`${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto! 🐢`)
                character1.removePoints(1)
            }

            console.log(powerResult1 === powerResult2 ? "Confronto empatado! Nenhum ponto foi perdido" : "")
        }
        //Verificando o vencedor
        if(testSkill1 > testSkill2){
            console.log(`${character1.name} marcou um ponto!`)
            character1.addPoints(1);
        }else if(testSkill2 > testSkill1){
            console.log(`${character2.name} marcou um ponto!`)
            character2.addPoints(1);
        }

        console.log("------------------------------------------------------------")
    }
}


async function declareWinner(character1, character2){
    console.log("Resultado final:")
    console.log(`${character1.name}: ${character1.pontos} ponto(s)`)
    console.log(`${character2.name}: ${character2.pontos} ponto(s)`)

    if(character1.pontos > character2.PONTOS){
        console.log(`\n${character1.name} venceu a corrida! 🏆`)
    } else if(character2.pontos > character1.pontos){
        console.log(`\n${character2.name} venceu a corrida! 🏆`)
    } else{
        console.log("A corrida terminou empatada")
    }
}
// Funcao autoinvocável
(async function main(){
    console.log(`🏁🚨A Corrida entre ${character1.name} e ${character2.name} está começando... \n`)

    //Funcao vai esperar antes de executar
    await playRaceEngine(character1, character2)
    await declareWinner(character1, character2)
})();