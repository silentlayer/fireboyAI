import Player from "./Player.js";
import { initTutorial } from "./lvlsetup.js";


export const canvas = document.querySelector('canvas'); 
export const ctx = canvas.getContext('2d'); 

canvas.width = 1024; 
canvas.height = 576;

let players = []; 
let obstacles = [];

function gameLoop(){ 
    const upPressed = keyboardState['w'];
    const leftPressed = keyboardState['a'];
    const rightPressed = keyboardState['d'];
    window.requestAnimationFrame(gameLoop); 

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
    
    // Collision detection and object drawing
    for(let i = 0; i < obstacles.length; i++){
        obstacles[i].draw();
    } 
    for(let i = 0; i < players.length ; i++){ 
        players[i].update();  
        players[i].collide(obstacles);   
    } 
}


const keyboardState = {}; 
window.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
  });
window.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
  });
   

const p1 = new Player({position: {x:100, y:0}, velocity: {x: 0, y: 10}});   
players.push(p1); 
initTutorial(obstacles); 
gameLoop();