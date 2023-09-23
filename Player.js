import {ctx, canvas} from "./main.js"

const gravity = 0.6; 
const air_resist = 1; 

export default class Player{
    constructor({position, velocity}){
        this.position = position;  
        this.velocity = velocity; 
        this.height = 50; 
        this.width = 50;  
        this.isAlive = true; 
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

        this.position.x += this.velocity.x; 
        this.position.y += this.velocity.y;   

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
            
            //WALL 
            if(obj.magic == 0){ 
                this.wallCol(obj); 
            }

            //FLOOR 
            else if (obj.magic == 1){
                this.floorCol(obj); 
            }

            //SPIKE
            else if(obj.magic == 2){
                if(this.colDetect(obj) == true){
                    this.isAlive = false; 
                }
            }

            //DOOR 
            else if(obj.magic == 3){

                for(let i = 0; i < obj.b.length; i++){
                    if(this.colDetect(obj.b[i])){
                        obj.open = true; 
                        break; 
                    }
                    else{
                        obj.open = false; 
                    }
                }
                
                if(obj.open == false){
                    if(obj.flat == true){ 
                        this.floorCol(obj); 
                    }
                    else{
                        this.wallCol(obj); 
                    }
                }

            }
            
            //FLAG
            else if(obj.magic == 4){
                if(this.colDetect(obj) == true){
                    return //TODO -> WIN GAME  
                }
            }



        } 
    }

    colDetect(obj){
        if(this.position.x < obj.x + obj.width &&
            this.position.x + this.width > obj.x &&
            this.position.y < obj.y + obj.height &&
            this.position.y + this.height > obj.y){
                return true; 
            }
        return false; 
    }

    floorCol(obj){
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

    wallCol(obj){
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
}






