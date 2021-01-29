// Confirm script is working
console.log(`Connecting...
You have connected app.js to index.html!`);

/* ---State--- */


// Create object that stores each square as a key value pair
let board = {};
let playerOnesTurn = true;


/* ---------------Functions--------------- */


const playSquare = (square) => {
  // If square is occupied in board object, alert and exit function
  if (board[square.id] !== '') {
    alert('Square is occupied. Play a different square');
    return;
  }
  // If state true run addX() else run addO()
  if (playerOnesTurn) {
    addX(square);
  } else {
    addO(square);
  }
}

// Add X to object and html then change state
const addX = (square) => {
  square.innerHTML = 'X';
  board[square.id] = 'X';
  playerOnesTurn = false;
  gameResult();
}

// Add O to object and html then change state
const addO = (square) => {
  square.innerHTML = 'O';
  board[square.id] = 'O';
  playerOnesTurn = true;
  gameResult();
}

// Determine winner/tie
const gameResult = () => {
  // Change board into an array and create a winner array with winning scenarios
  let results = Object.values(board);
  let winner = [
    [results[0], results[1], results[2]],
    [results[3], results[4], results[5]],
    [results[6], results[7], results[8]],
    [results[0], results[3], results[6]],
    [results[1], results[4], results[7]],
    [results[2], results[5], results[8]],
    [results[0], results[4], results[8]],
    [results[2], results[4], results[6]]
  ];
  // Iterate through scenarios and join values to find a winner
  for (let i = 0; i < winner.length; i++) {
    if (winner[i].join('') === 'XXX' || winner[i].join('') === 'OOO') {
      setTimeout(() => {
        alert('Winner!\n\nPress the Play Again button');
      });
      setTimeout(() => {
        resetGame();
      });
      return;
    }
  }
  // If result is a tie
  if (results.join('').length === 9) {
    setTimeout(() => {
      alert('Tie!\n\nPress the Play Again button');
    });
    setTimeout(() => {
      resetGame();
    });
  }
}

// Reset game function
const resetGame = () => {
  playerOnesTurn = true;
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
    board[squares[i].id] = '';
  }
}

// Get all elements (squares) of the board
const squares = document.getElementsByClassName('square');
// Get
const resetButton = document.getElementById('reset');

// Add event listeners to each element
for (let i = 0; i < squares.length; i++) {
  board[squares[i].id] = '';
  squares[i].addEventListener('click', eventHandler = e => {
    playSquare(e.target);
  });
}

resetButton.addEventListener('click', resetGame);



/* Notes

  * .querySelectorAll, .getElementsByClassName, and other methods return node list. They need to be iterarte via forEach() to access the elements
  *

*/