import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '1',
      player2: '2',
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
        row.push(null);
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
      if (board[i][column] === null && board[i][column] !== undefined) {
        board[i][column] = this.state.currentPlayer;
        break;
      }
    }
    this.setState({
      board: board,
    })
    this.changePlayer()
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