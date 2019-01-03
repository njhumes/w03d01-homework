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
    feed(){
        console.log(this);
        this.hunger -= 3;
        if(this.hunger < 0){
            this.hunger = 0;
        }
        $('#hunger-level').text(`Hunger: ${this.hunger}/10`);
        $('.gif').remove()
        if(this.age < 3){
            $('.game-display').append('<img class="gif" src="https://i.pinimg.com/originals/b5/49/c5/b549c552687942777915f92519d5054c.gif">')
        } else{
            $('.game-display').append('<img class="gif" src="images/donut3.png">')
            // $('.gif').fadeOut('slow')
            $('.gif').velocity('transition.fadeOut', {
                duration: 2000,
            })
        }
    }   
    play(){
        this.boredom -= 4;
        if (this.boredom < 0) {
            this.boredom = 0;
        }
        $('#boredom-level').text(`Boredom: ${this.boredom}/10`);
        $('.gif').remove()
        if(this.age < 3){
            $('.game-display').append('<img class="gif" src="https://i.gifer.com/origin/7d/7d6dd7aee61f0eae8caa330e54226a67_w200.gif">')
        } else {
            $('.game-display').append('<img class="gif" src="images/bartman.gif">')
        }
        $('.gif').velocity({
            translateX: 50,
        },  {
            loop: 1,
            duration: 1000,
        });
        $('.gif').velocity({
            translateX: -50,
        }, {
            loop: 1,
            duration: 1000,
            });
    }
    sleep(){
        this.sleepiness -= 4;
        if (this.sleepiness < 0) {
            this.sleepiness = 0;
        }
        $('#sleep-level').text(`Sleepiness: ${this.sleepiness}/10`);
        $('.gif').remove()
        if(this.age < 3) {
            $('.game-display').append('<img class="gif" src="https://i.pinimg.com/originals/20/7c/c5/207cc5f45d654c2b1f655b0bf1820bea.gif">')
        } else {
            $('.game-display').append('<img class="gif" src="images/bartmanplay.png">')
        }
        
    }
}

// 
// allow user to enter name
// const username = prompt('What is your Tamagotchi\'s name?');
let username;
// const bart = new Pet(username);
let bart;



function makeGame(){
    username = prompt('What is your Tamagotchi\'s name?');
    bart = new Pet(username);
    $('.start-button').hide();
    $('.logos').remove();
    $('.game-levels').append(`<p id="hunger-level">Hunger: ${bart.hunger}/10</p>`);
    $('.game-levels').append(`<p id="boredom-level">Boredom: ${bart.boredom}/10</p>`);
    $('.game-levels').append(`<p id="sleep-level">Sleepiness: ${bart.sleepiness}/10</p>`);
    $('.game-levels').append(`<p id="age-level">Age: ${bart.age}</p>`);
    $('.game-buttons').append(`<button class='btn-lg' id="feed">Feed</button>`);
    $('.game-buttons').append(`<button class='btn-lg' id="play">Play</button>`);
    $('.game-buttons').append(`<button class='btn-lg' id="rest">Rest</button>`);
    $('.game-display').append('<img class="bg" src="images/tv.png">')
    $('.game-display').append('<img class="gif" src="https://i.gifer.com/origin/7d/7d6dd7aee61f0eae8caa330e54226a67_w200.gif">')
    $('.game-levels').prepend(`<h1 class="tamagotchi-name">${username}</h1>`);
    let timeRunning = setInterval(increaseTime, 1000);
    function increaseTime() {
        game.time += 1;
        increaseLevels();
        gameOver();
        // evolve();
    }
    function gameOver() {
        if (bart.hunger > 9) {
            clearInterval(timeRunning);
            $('.gif').remove()
            $('.game-display').append('<img class="gif" src="images/dead.png">');
            $('.game-buttons').remove();
            $('.game').append('<div><button class="btn-lg" id="restart">Play Again</button></div>');

        }
        if (bart.boredom > 9) {
            clearInterval(timeRunning);
            $('.gif').remove()
            $('.game-display').append('<img class="gif" src="images/dead.png">');
            $('.game-buttons').remove();
            $('.game').append('<div><button class="btn-lg" id="restart">Play Again</button></div>');
        }
        if (bart.sleepiness > 9) {
            clearInterval(timeRunning);
            $('.gif').remove()
            $('.game-display').append('<img class="gif" src="images/dead.png">');
            // $('.game-buttons').remove();
            $('#feed').remove();
            $('#play').remove();
            $('#rest').remove();
            $('.game').prepend('<div><button class="btn-lg" id="restart">Play Again</button></div>');
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
        if (game.time % 10 === 0) {
            bart.age += 1;
            $('#age-level').text(`Age: ${bart.age}`);
        }
    }
    // function evolve() {
    //     if (bart.age > 1) {
    //         alert('Bart is evolving!')
    //         // $('.gif').remove();
    //         // $('.game-display').append('<img class="gif" src="images/bartman.gif">');
    //     }
    // }
}
// Start game when the button is clicked
$('.start-button').click(makeGame);

// add functionality to game buttons
$('.game').on('click', '#feed', function(){
    bart.feed();
})
$('.game').on('click', '#play', function(){
    bart.play();
})
$('.game').on('click', '#rest', function(){
    bart.sleep();
})
$('.game').on('click', '#restart', function(){
    location.reload();
})
// 1. Not let the numbers go negative - DONE
// 2. Have a game over message screen and give the option to restart- DONE
// 3. Add progress bars to the levels 
// 4. Move Bart around on Play - DONE
// Bonus: morph after age 5




