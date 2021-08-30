class Ninja {
    constructor(name, health = 10, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;

    }

    sayName() {
        console.log('name:', this.name);
    }

    showStats() {
        console.log('name:', this.name);
        console.log('health:', this.health);
        console.log('speed:', this.speed);
        console.log('strength:', this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name);
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;

    }

    speakWisdom() {
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months');
    }

    drinkSake() {

    }
}

const ninja1 = new Ninja('Hyabusa')
    // ninja1.sayName();
ninja1.showStats();

console.log();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();