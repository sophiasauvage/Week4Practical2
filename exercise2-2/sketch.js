



function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(255)
    for (x = 0; x < 400; x += 50) {
       let rectSelected = mousePosition(x, 0, 50, 400) // calls the mouse position function and it = rectSelected value
       if (rectSelected === true){ // if true fill colour
        fill (0, 0, 255)
       }
       else {
        fill(255)
       }
         rect(x, 0, 50, 400)
    }


}
//checks if mouse is pressed and whether that position is within the bounds of the rectangle, returns true or false.
function mousePosition(x, y, w, h){
    if (mouseIsPressed){
        if (mouseX >= x && mouseX <= x + w && mouseY >= y && mouseX <= y + h){
            return true
        }
       
    }
    return false

}
 