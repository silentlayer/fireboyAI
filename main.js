import Player from "./Player.js";
import { initTutorial } from "./lvlsetup.js";

export const canvas = document.querySelector('canvas'); 
export const ctx = canvas.getContext('2d'); 

canvas.width = 1024; //1024
canvas.height = 576;  //576

const rightBound = 600; 
const leftBound = 205; 
const normVelocity = 10; 

//BUILD LEVEL 
const backgroundFill = 'white'; 
const [obstacles, players] = initTutorial();  
const p1 = players[0]; 


//GAME LOOP
function gameLoop(){ 
    const upPressed = keyboardState['w'];
    const leftPressed = keyboardState['a'];
    const rightPressed = keyboardState['d'];
    window.requestAnimationFrame(gameLoop); 

    ctx.fillStyle = backgroundFill;
     

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(upPressed && p1.isGrounded()){
        p1.velocity.y = -1 * normVelocity; 
    }  
    if(leftPressed){
        if(p1.position.x < leftBound && leftPressed){
            p1.velocity.x = 0; 
            obstacles.forEach(obstacle => {
                obstacle.x += normVelocity; 
            })
        }
        else{
            p1.velocity.x = -1 * normVelocity; 
        }
    }
    if(rightPressed){
        if(p1.position.x > rightBound && rightPressed){
            p1.velocity.x = 0; 
            obstacles.forEach(obstacle => {
                obstacle.x -= normVelocity; 
            })
        }
        else{
            p1.velocity.x = normVelocity;
        } 
    }
    
    //Collision detection
    obstacles.forEach(obstacle => {
        obstacle.draw(); 
    })
    for(let i = 0; i < players.length ; i++){ 
        players[i].update();  
        players[i].collide(obstacles);    
    }   
}

//KEYBOARD LOGGER
const keyboardState = {}; 
window.addEventListener('keydown', (event) => {
    keyboardState[event.key] = true;
  });
window.addEventListener('keyup', (event) => {
    keyboardState[event.key] = false;
  });

//START GAME
gameLoop();