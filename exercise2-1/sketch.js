function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(255)
    for (x = 0; x < 400; x += 50) {
        square(x, 0, 50)
    }
}