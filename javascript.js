var canvas = document.body.children[2];
var context = canvas.getContext("2d");
context.scale(10, 10);
var score = 0;
var highScore = 0

Swal.fire({
  title: "Snake? SNAAAAAAKE?!",
  text: "Welcome to one of the most iconic digital games from the early days of phones - Snake! Use the arrow keys to move the green snake around the board, collecting the red dots as you go. Each red dot you get adds one point to your score and makes the snake longer. Be careful, though - if the head of the snake hits the edges of the board or another part of its body, then the game ends.",
  confirmButtonText: "Let's go!"
}).then(() => {setInterval(updateLoop, 300)})

// Movement using arrow keys
document.onkeyup = function(e){
switch (e.key){
  case "ArrowLeft":
    // LEFT
    direction = [-1, 0]
   
    break;
  
  case "ArrowDown":
    // DOWN
    direction = [0, 1]
    break;

  case "ArrowRight":
    // RIGHT
    direction = [1, 0]
    break;

  case "ArrowUp":
    // UP
    direction = [0, -1]
    break
}
}
// Game components
var snake = [
  [10,11],
  [10,12],
  [10,13],
  [10,14],
  [10,15]
];

var direction = [1,0];
var apple = [17,25];

reset = () => {
  clearInterval(updateLoop);
  Swal.fire({
    title: "Game Over!",
    text: `Your score was ${score}. The current high score is ${highScore}. Try again?`
  })
  score = 0;
  snake = [
    [10,11],
    [10,12],
    [10,13],
    [10,14],
    [10,15]
  ];
direction = [1,0];
apple = [17,25];
setInterval(updateLoop, 300)
}
// Rendering the game to the page
updateLoop = () =>{
  console.log(snake)
  snake.unshift([
    snake[0][0] + direction[0],
    snake[0][1] + direction[1]
  ]);
// Scoring
  if(snake[0][0] == apple[0] &&
    snake[0][1] == apple[1]){
      score++;
      $("#score").html(score)
    apple = [Math.floor(Math.random() * 30) | 0,
      Math.floor(Math.random() * 30) | 0]
      if(score > highScore){
        highScore = score
      }
  }else{
    snake.pop()
  }
// Game Over Conditions


for(let i = 1; i < snake.length; i++){
  if(snake[0][0] == snake[i][0] && snake[0][1] == snake[i][1]){
   
  
    reset()
  }
  if(snake[0][0] >= 30 || snake[0][0] < 0){
 
    reset()
  }
  if(snake[0][1] >= 30 || snake[0][1] < 0){
  
    reset()
  }

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


// setInterval(updateLoop, 300);


// Game Over Conditions
// for (let i=1; i < snake.length; i++){
//   if(snake[0][0] == snake[i][0]){
//     clearInterval(updateLoop)
//     alert("BANG")
//   }
// }
