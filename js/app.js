console.log('works');

const game = {

}

class Pet {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.boredom = 0;
        this.sleepiness = 0;
    }
    feed() {
        console.log(`Hunger level: ${this.hunger} - 3`);
    }
    play() {
        console.log(`Boredom level: ${this.boredom} - 4`)
    }
    sleep() {
        console.log(`Sleepiness level: ${this.sleepiness} - 5`)
    }
    getsHungry() {
        this.hunger += 2;
        console.log(this.hunger);
    }
    getsBored() {
        this.boredom += 3;
        console.log(this.boredom);
    }
    getsTired() {
        this.sleepiness += 4;
        console.log(this.sleepiness);
    }
}
let ziggy = new Pet('Ziggy');
console.log(ziggy);

function playGame() {
    console.log('run the 3 functions to increase the pets levels')
}

