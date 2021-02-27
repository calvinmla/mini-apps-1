import Square from './square.jsx';

const Row = ({row, play}) => {
  return (
    <div className='row'>
        {row.map((square, i) => (
          <Square key={i} circle={square} column={i} play={play}/>
        ))}
    </div>
  )
}

export default Row;