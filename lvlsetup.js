import wall from "./objects.js";
import {ctx, canvas} from "./main.js";

export function initTutorial(obstacles){
    const w0 = new wall(0, 400, 20, 256, ctx, true, obstacles); 
    const f0 = new wall(0, 556, 700, 20, ctx, false, obstacles); 
    const w1 = new wall(700, 526, 20, 50, ctx, true, obstacles);   
    const f1 = new wall(700, 526, 200, 20, ctx, false, obstacles); 
    const w2 = new wall(900, 476, 20, 70, ctx, true, obstacles); 
    const f2 = new wall(900, 476, 124, 20, ctx, false, obstacles); 
    const w3 = new wall(1006, 276, 20, 220, ctx, true, obstacles); 
    const f3 = new wall(600, 450, 200, 20, ctx, false, obstacles);
    const w4 = new wall(600, 410, 20, 40, ctx, true, obstacles); 
    const w5 = new wall(780, 410, 20, 40, ctx, true, obstacles); 
    const f4 = new wall(600, 410, 200, 20, ctx, false, obstacles); 


}

