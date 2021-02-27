import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: 1,
      player2: 2,
      currentPlayer: null,
      board: [],
      gameOver: false,
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
    // this.horizontalWin();
    // this.verticalWin();
    // this.leftDiagonalWin();
    // this.rightDiagonalWin();
    this.tieGame();
  }

  horizontalWin() {
    let board = this.state.board;
    for (let i = 5; i >= 0; i--) {
      for (let j = 0; j <= 3; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i][j + 1] &&
              board[i][j] === board[i][j + 2] &&
              board[i][j] === board[i][j + 3]) {
            return board[i][j];
          }
        }
      }
    }
  }

  verticalWin() {
    let board = this.state.board;
    for (let i = 5; i >= 3; i--) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j]=== board[i - 1][j] &&
              board[i][j]=== board[i - 2][j] &&
              board[i][j]=== board[i - 3][j]) {
            return board[i][j];
          }
        }
      }
    }
  }

  leftDiagonalWin() {
    let board = this.state.board;
    for (let i = 2; i >= 0; i--) {
      for (let j = 0; j < 4; j++) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i + 1][j + 1] &&
              board[i][j] === board[i + 2][j + 2] &&
              board[i][j] === board[i + 3][j + 3]) {
            return board[i][j];
          }
        }
      }
    }
  }

  rightDiagonalWin() {
    let board = this.state.board;
    for (let i = 2; i >= 0; i--) {
      for (let j = 6; j >= 3; j--) {
        if (board[i][j] !== 0) {
          if (board[i][j] === board[i + 1][j - 1] &&
              board[i][j] === board[i + 2][j - 2] &&
              board[i][j] === board[i + 3][j - 3]) {
            return board[i][j];
          }
        }
      }
    }
  }

  tieGame() {
    let tie;
    let board = this.state.board;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (board[i][j] === 0) {
          tie = false;
          break;
        } else {
          tie = true;
        }
      }
    }
    if (tie) {
      alert('tie')
    }
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