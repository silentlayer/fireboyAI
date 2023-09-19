const air_resist = 1; 

export default class wall{
    constructor(x, y, width, height, canvas, wall, obstacles){
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height; 
        this.canvas = canvas; 
        this.wall = wall;  
        obstacles.push(this); 
    }
    draw(){
        this.canvas.fillStyle = 'black'; 
        this.canvas.fillRect(this.x, this.y, this.width, this.height); 
    }
}

