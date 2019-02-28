let ball;
let ballSprite;
let score;
let toShow;

let x;
function preload(){
    ballSprite = loadImage('static/ball.png');
    clap = loadImage('static/clap.png');
    angry = loadImage('static/angry.png');
    score = 0;
    toShow = false;
}

function setup(){
    createCanvas(300, 500);
    ball = new Ball(ballSprite);
    
}

function draw(){
    background(200);
    ball.update();
    ball.show();
    textFont(1000);
    textAlign(CENTER, CENTER);
    text(score, width/2, 50);
    if(toShow && score > 1) {
        showEmoji(clap);
    }else if(!toShow && score>1){
        showEmoji(angry);
    }
}
function showEmoji(emoji){
    image(emoji,x,ball.pos.y-100,clap.size/2);
}

function mousePressed(){
    toShow = false;
    if (ball.pressed()){
        ball.start();
        score++;
        toShow = true;
    }
     x = mouseX;
}