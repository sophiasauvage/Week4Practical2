
function setup(){
    createCanvas(400,400)
}

function draw(){
    background(255)
    fill(0, 0, 255)
    let x = 10
    while (x < mouseX){
        circle(x, 200, 20)
        x += 20
    }
    fill(255)

    while (x < 400){
        circle(x, 200, 20)
        x += 20
    }
}