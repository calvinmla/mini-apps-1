// Confirm script is working
console.log(`Connecting...
You have connected app.js to index.html!`);

/* ---State--- */

// Create object that stores each square as a key value pair
let board = {};
let playerOnesTurn = true;

// Get all elements (squares) of the board
const squares = document.getElementsByClassName('square');
const startGame = () => {
  // Add event listeners to each element
  for (let i = 0; i < squares.length; i++) {
    board[squares[i].id] = '';
    squares[i].addEventListener('click', eventHandler = e => {
      playSquare(e.target);
    });
  }
}
startGame();

/* ---------------Functions--------------- */

const playSquare = (square) => {
  // If square is occupied in board object, alert and exit function
  console.log(square.id);
  if (board[square.id].length > 0 || board[square.id].length > 0) {
    console.log(board[square.id].length)
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
  // change board into an array and create a winner array with winning scenarios
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
  if (results.join('').length === 9) {
    document.removeEventListener('click', eventHandler);
    alert('Tie!\n\nPress the Play Again button');
  }
  for (let i = 0; i < winner.length; i++) {
    if (winner[i].join('') === 'XXX' || winner[i].join('') === 'OOO') {
      // for (let j = 0; j < squares.length; j++) {
      //   squares[j].removeEventListener('click', eventHandler);
      // }
      alert('Winner!\n\nPress the Play Again button');
    }
  }
}


console.log('pre-board', board)

// const resetGame = () => {
  let resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', (e) => {
    playerOnesTurn = true;
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerHTML = '';
      delete board[squares[i].id];
      console.log(squares[i].innerHTML)
    }
    console.log('post-board', board)
    startGame();
  })
// }



/* --- Old code --- */

// Retrieve all span elements

// const squares = document.querySelectorAll("span");

// Add an event listener to each span element, add X or O, and change state

// squares.forEach(current => {
//   current.addEventListener('click', () => {
//     if (playerOnesTurn) {
//       current.innerHTML = 'X';
//       playerOnesTurn = false;
//     } else {
//       current.innerHTML = 'O';
//       playerOnesTurn = true;
//     }
//   })
// })


/* Notes

  * .querySelectorAll, .getElementsByClassName, and other methods return node list. They need to be iterarte via forEach() to access the elements
  *

*/