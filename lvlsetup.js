import {floor, wall, spike, door, flag} from "./objects.js";
import Player from "./Player.js"; 

export function initTutorial(){   
    let obstacles = [];  
    let players = []; 

    players.push(new Player({position: {x:100, y:350}, velocity: {x: 0, y: 10}})); 
    obstacles.push(new floor(0, 480, 352, 32)); 
    obstacles.push(new wall(-32, 320, 32, 192));
    obstacles.push(new floor(-224, 320, 224, 32));
    obstacles.push(new wall(352, 448, 32, 64));
    obstacles.push(new floor(352, 416, 256, 32));
    obstacles.push(new wall(608, 384, 32, 64));
    obstacles.push(new floor(608, 352, 256, 32));
    obstacles.push(new wall(832, 352, 32, 256));
    obstacles.push(new wall(1024, 384, 32, 256));
    obstacles.push(new floor(1024, 353, 160, 32));
    obstacles.push(new wall(1184, 289, 32, 96));
    obstacles.push(new floor(1184, 257, 256, 32));
    obstacles.push(new wall(1440, 0, 32, 289)); 
    obstacles.push(new spike(864, 544, 160, 32)); 
    obstacles.push(new door(864, 352, 160, 32, 800, 351, true)); 
    obstacles.push(new flag(1344, 256)); 
    return [obstacles, players]; 
}


