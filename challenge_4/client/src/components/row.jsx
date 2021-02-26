import Square from './square.jsx';

const Row = ({row, play}) => {
  return (
    <div>
      <span className='row'>
        {row.map((square, i) => (
          <Square key={i} square={square} column={i} play={play}/>
        ))}
      </span>
    </div>
  )
}

export default Row;