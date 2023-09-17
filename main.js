import Player from "./Player.js"
import block from "./stage.js"

export const canvas = document.querySelector('canvas'); 
export const ctx = canvas.getContext('2d'); 

canvas.width = 1024; 
canvas.height = 576;

function animate(){ 
    const upPressed = keyboardState['w'];
    const leftPressed = keyboardState['a'];
    const rightPressed = keyboardState['d'];
    window.requestAnimationFrame(animate); 

    ctx.fillStyle = 'white';
    
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
    b1.draw(); 
    let colNum = b1.collide(p1); 
}

const keyboardState = {}; 

window.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
  });
  
window.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
  });
  

const p1 = new Player({position: {x:0, y:0}, velocity: {x: 0, y: 10}}); 
const b1 = new block(300, 526, 300, 50, ctx);  

animate();