import wall from "./objects.js";
import {ctx, canvas} from "./main.js";
import Player from "./Player.js"; 

export function initTutorial(obstacles){    
    obstacles.push(new wall(0, 480, 352, 32, ctx, false, obstacles)); 
    obstacles.push(new wall(-32, 320, 32, 192, ctx, true, obstacles));
    obstacles.push(new wall(-224, 320, 224, 32, ctx, false, obstacles));
    obstacles.push(new wall(352, 448, 32, 64, ctx, true, obstacles));
    obstacles.push(new wall(352, 416, 256, 32, ctx, false, obstacles));
    obstacles.push(new wall(608, 384, 32, 64, ctx, true, obstacles));
    obstacles.push(new wall(608, 352, 256, 32, ctx, false, obstacles));
    obstacles.push(new wall(832, 352, 32, 256, ctx, true, obstacles));
    obstacles.push(new wall(1024, 384, 32, 256, ctx, true, obstacles));
    obstacles.push(new wall(1024, 353, 160, 32, ctx, false, obstacles));
    obstacles.push(new wall(1184, 289, 32, 96, ctx, true, obstacles));
    obstacles.push(new wall(1184, 257, 256, 32, ctx, false, obstacles));
    obstacles.push(new wall(1440, 0, 32, 289, ctx, true, obstacles)); 
}


