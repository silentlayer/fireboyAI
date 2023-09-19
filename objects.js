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


