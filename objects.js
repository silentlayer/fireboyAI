import {ctx, canvas} from "./main.js";
const air_resist = 1; 

export default class wall{
    constructor(x, y, width, height, wall){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.canvas = ctx; 
        this.wall = wall;   
    }
    draw(){
        this.canvas.fillStyle = 'black'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
    }
}

