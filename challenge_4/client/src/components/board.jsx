import Row from './row.jsx';

const Board = ({board, play}) => {
  return (
    <div className='board'>
      {board.map((row, i) => (
        <Row key={i} row={row} play={play}/>
      ))}
    </div>
  )
}

export default Board;