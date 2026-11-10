function setup() {
    createCanvas(400, 400);
}
 
 
function draw() {
    background(255);

   let x = 0;
    while (x < width){
        let y = 0;
        while (y < height){
            if(x % 100 ===  y % 100 ){
                fill(0)
                console.log(x)
            }
            else{
                fill(255)
            }
            
            square(x, y, 50)
            y += 50;
            
        }
         x += 50;
    }
         
}