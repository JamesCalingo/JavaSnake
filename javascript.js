var canvas = document.body.children[0];
var context = canvas.getContext("2d");
context.scale(10, 10);
// context.fillRect(0, 0, 10, 10);

var snake = [
  [0,1],
  [0,2],
  [0,3],
  [1,3],
  [1,4]
];

updateLoop = () =>{

}

draw = () => {
snake.forEach(function([x, y]) {
  context.fillRect(x, y, 1, 1)
})
}
var keyboardState = [0,0]

keyboardState = [0,1]
tail = snake.pop()
tail[0] += keyboardState[0]
tail[1] += keyboardState[1]