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
        $('#hunger-level').text(`Hunger: ${this.hunger}/10`);
        console.log(this.hunger)
        $('.gif').remove()
        $('.game-display').append('<img class="gif" src="https://i.pinimg.com/originals/b5/49/c5/b549c552687942777915f92519d5054c.gif">')
    }
    play() {
        this.boredom -= 4;
        $('#boredom-level').text(`Boredom: ${this.boredom}/10`);
        console.log(this.boredom)
        console.log(typeof this.boredom)

        $('.gif').remove()
        $('.game-display').append('<img class="gif" src="https://i.gifer.com/origin/7d/7d6dd7aee61f0eae8caa330e54226a67_w200.gif">')
    }
    sleep() {
        this.sleepiness -= 4;
        $('#sleep-level').text(`Sleepiness: ${this.sleepiness}/10`);
        $('.gif').remove()
        $('.game-display').append('<img class="gif" src="https://i.pinimg.com/originals/20/7c/c5/207cc5f45d654c2b1f655b0bf1820bea.gif">')
    }
}

let bart = new Pet('bart');


function makeGame(){
    $('.game-levels').append(`<p id="hunger-level">Hunger: ${bart.hunger}/10</p>`);
    $('.game-levels').append(`<p id="boredom-level">Boredom: ${bart.boredom}/10</p>`);
    $('.game-levels').append(`<p id="sleep-level">Sleepiness: ${bart.sleepiness}/10</p>`);
    $('.game-levels').append(`<p id="age-level">Age: ${bart.age}</p>`);
    $('.game-buttons').append(`<button id="feed">Feed</button>`);
    $('.game-buttons').append(`<button id="play">Play</button>`);
    $('.game-buttons').append(`<button id="rest">Rest</button>`);
    $('.game-display').append('<img class="bg" src="https://ih1.redbubble.net/image.455277575.6116/flat,550x550,075,f.jpg">')
    $('.game-display').append('<img class="gif" src="https://i.gifer.com/origin/7d/7d6dd7aee61f0eae8caa330e54226a67_w200.gif">')
    $('.start-button').remove();
    // timeRunning;
    let timeRunning = setInterval(increaseTime, 1000);
    function increaseTime() {
        game.time += 1;
        increaseLevels();
        stopTimer();
    }
    function stopTimer() {
        if (bart.hunger > 9) {
            clearInterval(timeRunning);
            console.log('game over');
        }
        if (bart.boredom > 9) {
            clearInterval(timeRunning);
            console.log('game over')
        }
        if (bart.sleepiness > 9) {
            clearInterval(timeRunning);
            console.log('game over')
        }
    }

    function increaseLevels() {
        if (game.time % 2 === 0) {
            bart.hunger += 1;
            $('#hunger-level').text(`Hunger: ${bart.hunger}/10`);
        }
        if (game.time % 3 === 0) {
            bart.boredom += 2;
            $('#boredom-level').text(`Boredom: ${bart.boredom}/10`);
        }
        if (game.time % 5 === 0) {
            bart.sleepiness += 3;
            $('#sleep-level').text(`Sleepiness: ${bart.sleepiness}/10`);
        }
        if (game.time % 15 === 0) {
            bart.age += 1;
            $('#age-level').text(`Age: ${bart.age}`);
        }
    }
}
 
// Start game when the button is clicked
$('.start-button').click(makeGame);

// add functionality to game buttons
$('.game').on('click', '#feed', bart.feed);
$('.game').on('click', '#play', bart.play);
$('.game').on('click', '#rest', bart.sleep);

console.log(game.time)







// function increaseTime() {
//     game.time += 1;
//     increaseLevels();
//     stopTimer();
// }
// function stopTimer() {
//     if(bart.hunger > 9){
//         clearInterval(timeRunning);
//         console.log('game over');
//     }
//     if(bart.boredom > 9){
//         clearInterval(timeRunning);
//         console.log('game over')
//     }
//     if (bart.sleepiness > 9) {
//         clearInterval(timeRunning);
//         console.log('game over')
//     }
// }

// function increaseLevels(){
//     if(game.time % 2 === 0){
//         bart.hunger += 1;
//         $('#hunger-level').text(`Hunger: ${bart.hunger}/10`);
//     }
//     if(game.time % 3 === 0){
//         bart.boredom += 2;
//         $('#boredom-level').text(`Boredom: ${bart.boredom}/10`);
//     }
//     if(game.time % 5 === 0){
//         bart.sleepiness += 3;
//         $('#sleep-level').text(`Sleepiness: ${bart.sleepiness}/10`);
//     }
//     if(game.time % 15 === 0){
//         bart.age += 1;
//         $('#age-level').text(`Age: ${bart.age}`);
//     }
// }