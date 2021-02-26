import Board from './board.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: true,
      board: [],
      gameOver: false,
      messge: ''
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
      board: board
    });
  }

  render () {
    return (
      <React.Fragment>
        <h1>Connect 4</h1>
          <Board board={this.state.board}/>
      </React.Fragment>
    );
  }
}

export default App;