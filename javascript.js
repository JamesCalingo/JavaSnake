var canvas = document.body.children[2];
var context = canvas.getContext("2d");
context.scale(10, 10);
// context.fillRect(0, 0, 10, 10);

// Movement using arrow keys
document.onkeyup = function(e){
switch (e.key){
  case "ArrowLeft":
    // LEFT
    direction = [-1, 0]
    console.log("Going LEFT")
    break;
  
  case "ArrowDown":
    // DOWN
    direction = [0, 1]
    console.log("Going DOWN")
    break;

  case "ArrowRight":
    // RIGHT
    direction = [1, 0]
    console.log("going RIGHT")
    break;

  case "ArrowUp":
    // UP
    direction = [0, -1]
    console.log("Going UP")
    break
}
}

var snake = [
  [0,1],
  [0,2],
  [0,3],
  [1,3],
  [1,4]
];

updateLoop = () =>{
  tail = snake.pop();
  head = snake[0];
  console.log(snake)
  tail[0] = head[0] + direction[0];
  tail[1] = head[1] + direction[1];
  snake.unshift(tail);
  draw();
}

draw = () => {
  context.clearRect(0, 0, 300, 300)
snake.forEach(function([x, y]) {
  context.fillRect(x, y, 1, 1)
})
}

draw()
var direction = [1,0]

setInterval(updateLoop, 800)