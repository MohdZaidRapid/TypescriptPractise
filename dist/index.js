"use strict";
// Class and objects
// classes
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.getMyHeight = () => this.height;
        this.id = String(Math.random() * 1000);
    }
}
class Plater extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.special = special;
    }
}
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const anas = new Player2(100, 150, 23, true);
console.log(anas.weight);
console.log(anas.getMyHeight());
console.log(anas.getMyPower());
console.log(anas.id);
