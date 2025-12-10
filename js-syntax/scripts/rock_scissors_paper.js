
// globals
let playerPoint = 0;
let computerPoint = 0;
const pointElement = document.querySelector('.js-point');
let showPoints = "";

// play the game
function play(playerMove) {
  const resultElement = document.querySelector('.js-result');
  const moveElement = document.querySelector('.js-move');
  computerMove = pickRandomMove();
  let res = "";

  if (playerMove === computerMove) {
    res = "Tie";
  } else if (
    playerMove === "rock" && computerMove === "scissors" ||
    playerMove === "scissors" && computerMove === "paper" ||
    playerMove === "paper" && computerMove === "rock") {
      res = "You win!";
      playerPoint ++;
  } else {
    res = "You lose!";
    computerPoint++;
  }

  showPoints = "You: " + playerPoint + " Comuter: " + computerPoint;
  resultElement.innerHTML = res;
  moveElement.innerHTML = `You:
    <img src="images/${playerMove}.png" class="move-icon" alt="rock">
    Computer:
    <img src="images/${computerMove}.png" class="move-icon" alt="scissors"> `;
    pointElement.innerHTML = showPoints;
}

// return computer move
function pickRandomMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetPoint() {
  playerPoint = 0;
  computerPoint = 0;
  showPoints = "You: " + playerPoint + " Comuter: " + computerPoint;
  pointElement.innerHTML = showPoints;
}


let isAutoPlaying = false;
let interval_id;

function autoPlay() {
  if (!isAutoPlaying) { // if not auto playing
    interval_id = setInterval(() => {
      const playerMove = pickRandomMove(); // random move
      play(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(interval_id);
    isAutoPlaying = false;
  }

  // change button via css and text via .js-autoPlay
  const buttonElement = document.querySelector('.js-autoPlay');
  if (buttonElement.innerText === 'Auto play') {
      buttonElement.innerHTML = 'Stop';
      buttonElement.classList.add('is-autoPlaying'); // css on
  } else {
      buttonElement.innerHTML = 'Auto play';
      buttonElement.classList.remove('is-autoPlaying'); // css off
      isAutoPlaying = false;
  }
}