var canvas = document.body.children[2];
var context = canvas.getContext("2d");
context.scale(10, 10);
// context.fillRect(0, 0, 10, 10);

// Movement using arrow keys
document.onkeyup = function(e){
  // // DOWN
  // if(e.which == 38){
  //   direction = [0, -1];
  //   // UP
  // }else if (e.which = 40){
      // direction = [0, 1]
  // }
switch (e.which){
  case 37:
    // LEFT
    direction = [-1, 0]
    break;
  
  case 38:
    // DOWN
    direction = [0, -1]
    break;

  case 39:
    // RIGHT
    direction = [1, 0]
    break;

  case 40:
    // UP
    direction = [0, 1]
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
  tail[0] = head[0] + keyboardState[0];
  tail[1] = head[1] + keyboardState[1];
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

// keyboardState = [0,-1]
// tail = snake.pop();
// head = snake[0];
// tail[0] = head[0] + keyboardState[0];
// tail[1] = head[1] + keyboardState[1];
// snake.unshift(tail);
// console.log(snake);
// draw();