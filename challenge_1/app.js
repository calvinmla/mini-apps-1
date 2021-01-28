// Confirm script is working
console.log(`Connecting...
You have connected app.js to index.html!`);

/* ---State--- */

// Create object that stores each square as a key value pair
let board = {};
let playerOnesTurn = true;


/* ---Functions--- */

// Determine winner/tie
const gameResult = () => {

}

// Get all elements (squares) of the board
const position = document.getElementsByClassName('square');

// Add X to object and html then change state
const addX = (square) => {
  board[square.target.id] = 'X';
  square.target.innerHTML = 'X';
  playerOnesTurn = false;
}

// Add O to object and html then change state
const addO = (square) => {
  board[square.target.id] = 'O';
  square.target.innerHTML = 'O';
  playerOnesTurn = true;
}
const playSquare = (square) => {
  // If square is occupied in board object, alert and exit function
  if (board[square.target.id]) {
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


/* ---Interaction--- */

// Add event listeners to each element
for (let i = 0; i < position.length; i++) {
  board[position[i].id] = '';
  position[i].addEventListener('click', event => {
    playSquare(event);
  })
}





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