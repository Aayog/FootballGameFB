let ball;
let ballSprite;
let score, highscore;
let toShow;
let x;
function preload(){
    ballSprite = loadImage('static/ball.png');
    clap = loadImage('static/clap.png');
    angry = loadImage('static/angry.png');
    score = 0;
    toShow = false;
    highscore = 0;
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
    text("Highscore: " + highscore, 50, 50);
    if(toShow && score > 1) {
        showEmoji(clap);
    }else if(!toShow && score>1){
        showEmoji(angry);
    }
    if(score >= highscore){
        highscore = score;
    }
    if(ball.pos.y > height){
        ball.reset();
        score = 0;
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