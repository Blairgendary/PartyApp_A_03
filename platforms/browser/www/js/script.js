var x, y, z;
var deviceWidth;
var deviceHeight;
var colVal;
var mapped;
var zPrev;
var players = 0;

var descVis = false;

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation);
} else {
    alert("Sorry, your browser does NOT support device orientation");
}

deviceWidth = (window.innerWidth);
deviceHeight = (window.innerHeight);

$("#players").click(function(){ 
    window.location = 'pages/player.html';
    $("#numPlayer").text(players);
});

$("#back").click(function(){ 
    window.location = '../index.html';
});

$("#icon").click(function(){ 
    descVis = !descVis;
});

$("#plus").click(function(){ 
    players += 1;
    console.log(players);
    $("#numPlayer").text(players);
});

$("#sub").click(function(){ 
    players -= 1;
    console.log(players);
    $("#numPlayer").text(players);
});



function handleOrientation(event) {
    z = event.alpha;
    x = event.beta;
    y = event.gamma;
    $("#alpha").html(z);
    $("#beta").html(x);
    $("#gamma").html(y);
    if (zPrev > z + 10) { 
    $('#doot').trigger('play');
    } else if (zPrev < z - 10) { 
    $('#doot').trigger('play');
    }
    zPrev = z;
}

function preload() {
    partyFont = loadFont('fonts/PermanentMarker-Regular.ttf');
}

var actions = [];
var desc = [];
actions[0] = "Party Time";
desc[0] = "Everyone drinks their beverage, everyone is having a good time!"
actions[1] = "Snake";
desc[1] = "Snakes have a head and a tail. Everyone playing must decided whether to grab the person to their right and lefts arm. If everyone links together and there is not a break in the chain. Everyone loses, as well as if the snake has two or more breaks in the chain."
actions[2] = "Ryhme Time";
desc[2] = "The individual who spun the phone this turn must start with a word that they say aloud. The person to there right must now rhyme with that word. This repeats until an individual doesnt successfully rhyme or they take too much time to rhyme."
actions[3] = "Spin Again";
desc[3] = ""
actions[4] = "Jail";
desc[4] = "Retreat to the corner of the room until it is your next turn, you don't need to participate in any of the games."
actions[5] = "Story Time";
desc[5] = "The individual who spun the phone this turn must start with a word the player to the right now repeats all previous words and then adds a new one. Failure to repeat the whole story or add a word is a loss."

function setup() {
    //Creating a canvas object and then apply that canvas to a html element
    var cnv = createCanvas(displayWidth, displayHeight);
    cnv.parent("myCanvas");
    textFont(partyFont);
    textSize(48);
    textAlign(CENTER, CENTER);
    
    //setting colorMode to Hue, Sat, Brightness
    colorMode(HSB, 360);
}

function draw() {
    //drawing the background colour
    background(z, 360, 300);
    fill(0, 0, 360);
    push();
    translate(displayWidth / 2, displayHeight / 2);
    rotate(PI / 2);
    mapped = map(z, 0, 360, 0, 6);
    text(actions[int(mapped)], 0, 0);
    pop();
    
    if (descVis == true) { 
        push();
        textAlign(LEFT,BASELINE);
        translate(displayWidth /  2.5,25);
        rotate(PI / 2);
        mapped = map(z, 0, 360, 0, 6);
        noStroke();
        fill(z,360,260);
        rect(-25,0,displayHeight+25,300);
        fill(0,0,360);
        textSize(22);
        text(desc[int(mapped)],0,0,displayHeight-25,300);
        pop();
    }
}
