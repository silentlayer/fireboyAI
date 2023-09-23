import {ctx, canvas} from "./main.js";
const air_resist = 1; 

export class wall{

    constructor(x, y, width, height){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.canvas = ctx; 
        this.magic = 0;    
    }
    draw(){
        this.canvas.fillStyle = 'black'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
    }
}
export class floor{
    constructor(x, y, width, height){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.canvas = ctx; 
        this.magic = 1;    
    }
    draw(){
        this.canvas.fillStyle = 'black'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
    }
}

export class spike{
    constructor(x, y, width, height){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.magic = 2; 
        this.canvas = ctx; 
    }
    draw(){
        this.canvas.fillStyle = 'purple'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
    }
}
export class flag{
    constructor(x, y){
        this.x = x; 
        this.y = y; 
        this.width = 32; 
        this.height = 8; 
        this.magic = 4; 
        this.canvas = ctx; 
    }
    draw(){
        this.canvas.fillStyle = 'green'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height);
    }
}
export class door{
    constructor(x, y, width, height, list, flat){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.magic = 3; 
        this.canvas = ctx; 
        this.b = [new button(list[0], list[1]), new button(list[2], list[3])]  
        this.open = false; 
        this.flat = flat; 
    }
    draw(){
        this.canvas.fillStyle = 'yellow'; 
        this.b.forEach(button => {
            this.canvas.fillRect(button.x, button.y, button.width, button.height); 
        })
        if(this.open == true){
            this.canvas.fillStyle = 'white'; 
        }
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
        
    }
}

class button{
    constructor(x, y){
        this.x = x; 
        this.y = y; 
        this.width = 32; 
        this.height = 8; 
    }
}


