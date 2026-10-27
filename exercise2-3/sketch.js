function setup() {
    createCanvas(400, 400);
}
 
 
function draw() {
    background(255);
  /*  for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 50) {
            square(x, y, 50);
        }
    }*/
   let x = 0;
    while (x < width){
        let y = 0;

       
        while (y < height){
            square(x, y, 50)
            y += 50;
        }
         x += 50;
    }
    

         
}