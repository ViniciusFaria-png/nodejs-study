class Character {
    constructor(name, speed, handling, power, pontos = 0){
        this.name = name
        this.speed = speed
        this.handling = handling
        this.power = power
        this.pontos = pontos
    }

    addPoints(points){
        this.pontos += points;
    }

    removePoints(points){
        this.pontos -= points;
    }
}
module.exports = Character;