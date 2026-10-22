
function setup() {
    createCanvas(600, 600)
}

function draw(){
    background(255)
       
       
       
       let x = 0
       let y = 0
       while (y < 600){
         stroke(200, 0, 0)
       strokeWeight(3)
        line(600, 600, x, y)
        stroke(255, 255, 0)
        line(600, 0, x, y)
        stroke(250, 150, 0)
        line(300, 300, x + 600, y )
       y += 10
       }
}



