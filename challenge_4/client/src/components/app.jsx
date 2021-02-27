import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: 0,
      board: []
    };
  }

  componentDidMount() {
    this.createBoard();
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 6; i++) {
      let row = [];
      for (let j = 0; j < 7; j++) {
        row.push(0);
      }
      board.push(row);
    }
    this.setState({
      currentPlayer: this.state.player1,
      board: board
    });
  }

  changePlayer() {
    if (this.state.currentPlayer === this.state.player1) {
      this.setState({
        currentPlayer: this.state.player2
      })
    } else {
      this.setState({
        currentPlayer: this.state.player1
      })
    }
  }

  playTurn(column) {
    let board = this.state.board;
    for (let i = 5; i >= 0; i--) {
      if (board[i][column] === 0) {
        board[i][column] = this.state.currentPlayer;
        this.changePlayer()
        break;
      }
    }
    this.horizontalWin(board);
    this.verticalWin(board);
    this.leftDiagonalWin(board);
    this.rightDiagonalWin(board);
    this.tieGame(board);
  }

  horizontalWin(board) {
    for (let i = 5; i >= 0; i--) {
      for (let j = 0; j <= 3; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i][j + 1] &&
              board[i][j] === board[i][j + 2] &&
              board[i][j] === board[i][j + 3]) {
            setTimeout(() => {
              alert(`Player ${board[i][j]} won!`);
              this.createBoard();
            }, 100)
          }
        }
      }
    }
  }

  verticalWin(board) {
    for (let i = 5; i >= 3; i--) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j]=== board[i - 1][j] &&
              board[i][j]=== board[i - 2][j] &&
              board[i][j]=== board[i - 3][j]) {
            setTimeout(() => {
              alert(`Player ${board[i][j]} won!`);
              this.createBoard();
            }, 100)
          }
        }
      }
    }
  }

  leftDiagonalWin(board) {
    for (let i = 2; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i + 1][j + 1] &&
              board[i][j] === board[i + 2][j + 2] &&
              board[i][j] === board[i + 3][j + 3]) {
            setTimeout(() => {
              alert(`Player ${board[i][j]} won!`);
              this.createBoard();
            }, 100)
          }
        }
      }
    }
  }

  rightDiagonalWin(board) {
    for (let i = 2; i >= 0; i--) {
      for (let j = 6; j >= 3; j--) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i + 1][j - 1] &&
              board[i][j] === board[i + 2][j - 2] &&
              board[i][j] === board[i + 3][j - 3]) {
            setTimeout(() => {
              alert(`Player ${board[i][j]} won!`);
              this.createBoard();
            }, 100)
          }
        }
      }
    }
  }

  tieGame(board) {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] === 0) {
          return;
        }
      }
    }
    setTimeout(() => {
      alert('Tie game!');
      this.createBoard();
    }, 100)
  }

  render () {
    return (
      <React.Fragment>
        <h1>Connect 4</h1>
          <Board board={this.state.board} play={this.playTurn.bind(this)}/>
      </React.Fragment>
    );
  }
}

export default App;