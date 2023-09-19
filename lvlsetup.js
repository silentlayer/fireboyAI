import wall from "./objects.js";
import {ctx, canvas} from "./main.js";

export function initTutorial(obstacles){
    const w0 = new wall(0, 0, 20, 576, ctx, true, obstacles); 
    const f0 = new wall(0, 556, 700, 20, ctx, false, obstacles); 
    const w1 = new wall(700, 526, 20, 50, ctx, true, obstacles);   
    const f1 = new wall(700, 526, 200, 20, ctx, false, obstacles); 
    const w2 = new wall(900, 476, 20, 70, ctx, true, obstacles); 
    const f2 = new wall(900, 476, 124, 20, ctx, false, obstacles); 
    const w3 = new wall(1006, 396, 20, 100, ctx, true, obstacles); 
    const f5 = new wall(1006, 396, 300, 20, ctx, false, obstacles); 
    // const f6 = new wall(0, 300, 200, 20, ctx, false, obstacles); 
    // const w4 = new wall(200, 300, 20, 100, ctx, true, obstacles); 
    // const f7 = new wall(200, 400, 300, 20, ctx, false, obstacles); 
    // const w5 = new wall(500, 400, 20, 50, ctx, true, obstacles);
    // const f8 = new wall(500, 450, 200, 20, ctx, false, obstacles); 
    // const w6 = new wall(680, 400, 20, 50, ctx, true, obstacles); 
}

