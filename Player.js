import {ctx, canvas} from "./main.js"

const gravity = 0.7; 
const air_resist = 1; 

export default class Player{
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
        if((this.position.y + this.velocity.y + this.height >= canvas.height)){ 
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






