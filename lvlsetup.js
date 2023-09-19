import wall from "./objects.js";
import Player from "./Player.js"; 

export function initTutorial(){   
    let obstacles = [];  
    let players = []; 

    players.push(new Player({position: {x:100, y:350}, velocity: {x: 0, y: 10}})); 
    obstacles.push(new wall(0, 480, 352, 32, false)); 
    obstacles.push(new wall(-32, 320, 32, 192, true));
    obstacles.push(new wall(-224, 320, 224, 32, false));
    obstacles.push(new wall(352, 448, 32, 64, true));
    obstacles.push(new wall(352, 416, 256, 32, false));
    obstacles.push(new wall(608, 384, 32, 64, true));
    obstacles.push(new wall(608, 352, 256, 32, false));
    obstacles.push(new wall(832, 352, 32, 256, true));
    obstacles.push(new wall(1024, 384, 32, 256, true));
    obstacles.push(new wall(1024, 353, 160, 32, false));
    obstacles.push(new wall(1184, 289, 32, 96, true));
    obstacles.push(new wall(1184, 257, 256, 32, false));
    obstacles.push(new wall(1440, 0, 32, 289, true)); 
    return [obstacles, players]; 
}


