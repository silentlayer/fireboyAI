const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d'); 

canvas.width = 1024; 
canvas.height = 576; 

const gravity = 0.8; 
const air_resist = 1; 

ctx.fillRect(0, 0, canvas.width, canvas.height); 

class Player{
    constructor({position, velocity}){
        this.position = position;  
        this.velocity = velocity; 
        this.height = 50; 
        this.width = 50;  
    }

    draw(){
        ctx.fillStyle = 'red'; 
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
    }
    isGrounded(){
        if(this.position.y + this.height < canvas.height){
            return false; 
        }
        return true; 
    }

    update(){
        this.draw();  
        this.position.y += this.velocity.y;  
        this.position.x += this.velocity.x; 

        //gravity
        if(this.position.y + this.velocity.y + this.height >= canvas.height){ 
            this.velocity.y = 0; 
        }
        else{
            this.velocity.y += gravity;
        }

        //air-resistance 
        if(this.velocity.x > 0){ 
            this.velocity.x -= air_resist; 
        }
        else if(this.velocity.x < 0){
            this.velocity.x += air_resist; 
        }
    }
}

function animate(){
    const upPressed = keyboardState['w'];
    const leftPressed = keyboardState['a'];
    const rightPressed = keyboardState['d'];
    window.requestAnimationFrame(animate); 
    ctx.fillStyle = 'black'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(upPressed && p1.isGrounded()){
        p1.velocity.y = -10; 
    }  
    if(leftPressed){
        p1.velocity.x = -10; 
    }
    if(rightPressed){
        p1.velocity.x = 10; 
    }
    p1.update(); 
}

const keyboardState = {}; 

window.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
  });
  
window.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
  });
  

const p1 = new Player({position: {x:0, y:0}, velocity: {x: 0, y: 10}}); 
animate();





