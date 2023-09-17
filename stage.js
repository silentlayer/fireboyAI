export default class block{
    constructor(x1, y1, width, height, canvas){
        this.x1 = x1; 
        this.y1 = y1; 
        this.width = width; 
        this.height = height;  
        this.canvas = canvas; 
    }

    draw(){
        this.canvas.fillStyle = 'black'; 
        this.canvas.fillRect(this.x1, this.y1, this.width, this.height); 
    }

    collide(player){

        let player_y = player.position.y; 
        let player_x = player.position.x; 

        // Player on same y level (sideways collisions)
        if((player_y >= this.y1 && player_y <= this.y1 + this.height) || 
        (player_y + player.height >= this.y1 && player_y + player.height <= this.y1 + this.height)){
            
            if((player_x + player.width > this.x1 && player_x + player.width < this.x1 + this.width)){
                player.position.x = this.x1 - player.width; 
                player.velocity.x = -1 * player.velocity.x; 
                return 1; 
            }
            else if((player_x <= this.x1 + this.width && player_x > this.x1)){
                player.position.x = this.x1 + this.width; 
                player.velocity.x = -1 * player.velocity.x; 
                return 2; 
            }
        }

        // Player on the same x level (top-bottom collisions)
        else if ((player_x >= this.x1 && player_x <= this.x1 + this.height) ||
        (player_x + player.height >= this.x1 && player_x + player.height <= this.x1 + this.height)){

            if(player_y + player.height >= this.y1 && player_y + player.height <= this.y1 + this.height){
                player.velocity.y = 0;
                console.log('hi'); 
                player.position.y = this.y1 - player.height - 1;  
                return 3; 
            }
            else if(player_y <= this.y1 + this.height && player_y >= this.y1){
                player.position.y = this.y1 + this.height; 
                player.velocity.y = -1 * player.velocity.y; 
                return 4; 
            }


        }
    }
}
