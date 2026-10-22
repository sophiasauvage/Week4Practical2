
function setup(){
    createCanvas(400,400)
}

function draw(){
    background(255)
    fill(0, 0, 255)
    let x = 0
    while (x < 400){
        circle(mouseX, 200, 20)
        mouseX += 20
    }
}