import Row from './row.jsx';

const Board = ({board, play}) => {
  return (
    <div>
      <span className='board'>
      {board.map((row, i) => (
        <Row key={i} row={row} play={play}/>
      ))}
      </span>
    </div>
  )
}

export default Board;