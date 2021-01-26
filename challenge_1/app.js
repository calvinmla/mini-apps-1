
console.log(`Connecting...
You have connected app.js to index.html!`);

let playerOne = true;

const squares = document.querySelectorAll("span");

squares.forEach(current => {
  current.addEventListener('click', () => {
    if (playerOne) {
      current.innerHTML = 'X';
      playerOne = false;
    } else {
      current.innerHTML = 'O';
      playerOne = true;
    }
  })
})


/* Notes

  * .querySelectorAll, .getElementsByClassName, and other methods return node list. They need to be iterarte via forEach() to access the elements
  *

*/