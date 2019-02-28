class Ball{
    
    constructor(sprite){
        this.sprite = sprite;
        this.size = this.sprite.width;
        
        this.pos = createVector(width/2, height-this.size);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
        this.gravity = createVector(0,.4);
        this.gamePlay = false;
       
    }
    
    reset(){
        this.pos = createVector(width/2, height-this.size);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
        this.gamePlay = false;
    }
    
    start(){
        if(!this.gamePlay){
            this.applyForce(createVector(0,-8)); 
            this.gamePlay = true;
        }else{
            this.applyForce(createVector(random(-3,-3),random(-7,-12)));   
        }
        
    }
    
    update(){
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
        this.velocity.mult(0.999);
        this.boundCheck()
        if(this.gamePlay && frameCount % 2 == 0) this.applyForce(this.gravity);
    }
    
    applyForce(force){
        this.acceleration.add(force);
        
    }
    
    boundCheck(){
        if((this.pos.x >= width - this.size/2) || (this.pos.x <= this.size/2)){
            this.velocity.x = -this.velocity.x;
        }
        if(this.pos.y < -this.size/2){
            this.velocity.y = -this.velocity.y;
        }
        
    }
    
    show(){
        imageMode(CENTER);
        image(this.sprite, this.pos.x, this.pos.y);
    }
    
    pressed(){
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        return (distance < this.size/2);
    }
}