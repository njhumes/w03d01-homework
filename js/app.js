const game = {
    time: 0,
}
class Pet {
    constructor(name) {
        this.name = name;
        this.hunger = 3;
        this.boredom = 2;
        this.sleepiness = 4;
        this.age = 1;
    }
    feed() {
        this.hunger -= 3;
        $('#hunger-level').text(`Hunger: ${this.hunger}`);
    }
    play() {
        this.boredom -= 4;
        $('#boredom-level').text(`Boredom: ${this.boredom}`);
    }
    sleep() {
        this.sleepiness -= 4;
        $('#sleep-level').text(`Sleepiness: ${this.sleepiness}`);
    }
}

let ziggy = new Pet('Ziggy');


function makeGame(){
    $('.game-levels').append(`<p id="hunger-level">Hunger: ${ziggy.hunger}</p>`);
    $('.game-levels').append(`<p id="boredom-level">Boredom: ${ziggy.boredom}</p>`);
    $('.game-levels').append(`<p id="sleep-level">Sleepiness: ${ziggy.sleepiness}</p>`);
    $('.game-levels').append(`<p id="age-level">Age: ${ziggy.age}</p>`);
    $('.game-buttons').append(`<button id="feed">Feed</button>`);
    $('.game-buttons').append(`<button id="play">Play</button>`);
    $('.game-buttons').append(`<button id="rest">Rest</button>`);
    $('.game-display').append('<img class="gif" src="https://25.media.tumblr.com/a057dfb6d795792076571ae00f972506/tumblr_mmfwdqRCK11rcl9fxo1_500.gif">')
    $('.start-button').remove();
    setInterval(increaseTime, 1000);
}

// Start game when the button is clicked
$('.start-button').click(makeGame);

// this function sets the timer and increase the tamagotchis levels
function increaseTime(){
    game.time += 1;
    increaseLevels();
}

function increaseLevels(){
    if(game.time % 2 === 0){
        ziggy.hunger += 1;
        $('#hunger-level').text(`Hunger: ${ziggy.hunger}`);
    }
    if(game.time % 3 === 0){
        ziggy.boredom += 2;
        $('#boredom-level').text(`Boredom: ${ziggy.boredom}`);
    }
    if(game.time % 5 === 0){
        ziggy.sleepiness += 3;
        $('#sleep-level').text(`Sleepiness: ${ziggy.sleepiness}`);
    }
    if(game.time % 15 === 0){
        ziggy.age += 1;
        $('#age-level').text(`Age: ${ziggy.age}`);
    }
}

