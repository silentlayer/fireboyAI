import {ctx, canvas} from "./main.js"

const gravity = 0.6; 
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
        if(this.velocity.y == 0){
            return true; 
        }
        return false;  
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

    collide(obstacles){
        for(let i = 0; i < obstacles.length; i++){
            let obj = obstacles[i]; 
            if(obj.wall == true){ 

                //on same y level (horizontal collision with wall)
                if((this.position.y > obj.y && this.position.y < obj.y + obj.height) ||
                this.position.y + this.height > obj.y && this.position.y < obj.y + obj.height){
                    if(this.position.x + this.width > obj.x && this.position.x + this.width < obj.x + obj.width){ 
                        this.position.x = obj.x - this.width;  
                        this.velocity.x = 0; 
                    } else if ((this.position.x < obj.x + obj.width) && (this.position.x > obj.x)){ 
                        this.position.x = obj.x + obj.width; 
                        this.velocity.x = 0; 
                    }
                } 
            }
            else{

                //on same x level (vertical collision with platform)
                if((this.position.x > obj.x && this.position.x < obj.x + obj.width) ||
                this.position.x + this.width > obj.x && this.position.x < obj.x + obj.width){
                    if(this.position.y + this.height > obj.y && this.position.y + this.height < obj.y + obj.height){
                        this.position.y = obj.y - this.height; 
                        this.velocity.y = 0; 
                    } else if ((this.position.y < obj.y + obj.height) && (this.position.y > obj.y)){
                        this.position.y = obj.y + obj.height; 
                        this.velocity.y = -1 * this.velocity.y; 
                    }
                }
            }

        } 
    }
}






