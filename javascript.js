var canvas = document.body.children[2];
var context = canvas.getContext("2d");
context.scale(10, 10);


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
// Game components
var snake = [
  [0,0],
  [1,0],
  [2,0],
  [3,0],
  [4,0]
];

var direction = [1,0]
var apple = [Math.floor(Math.random() * 30) | 0,
  Math.floor(Math.random() * 30) | 0]

// Rendering the game to the page
updateLoop = () =>{
  let head = snake[0]
  console.log(snake)
  snake.unshift([
    snake[0][0] + direction[0],
    snake[0][1] + direction[1]
  ]);

  if(snake[0][0] == apple[0] &&
    snake[0][1] == apple[1]){
    apple = [Math.floor(Math.random() * 30) | 0,
      Math.floor(Math.random() * 30) | 0]
  }else{
    snake.pop()
  }
  draw();
}

draw = () => {
  context.clearRect(0, 0, 300, 300)

  context.fillStyle="red"
context.fillRect(apple[0], apple[1], 1, 1)

  context.fillStyle = "green"
snake.forEach(function([x, y]) {
  context.fillRect(x, y, 1, 1)
})


}

draw()


setInterval(updateLoop, 300);


// Game Over Conditions
for (let i=1; i < snake.length; i++){
  if(snake[0][0] == snake[i][0]){
    clearInterval(updateLoop)
    alert("BANG")
  }
}
if(snake[0][0] > 30 || snake[0][0] < 0){
  clearInterval(updateLoop)
  alert("BANG")
}