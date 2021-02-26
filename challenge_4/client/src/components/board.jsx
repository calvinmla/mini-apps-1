import Row from './row.jsx';

const Board = ({board}) => {
  console.log('board prop ->', board)
  return (
    <div>
      {board.map((row, i) => (
        <Row key={i} row={row}/>
      ))}
    </div>
  )
}

export default Board;