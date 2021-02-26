import Square from './square.jsx';

const Row = ({row}) => {
  console.log('row prop ->', row)
  return (
    <div>
      {row.map((square, i) => (
        <Square key={i} square={square} column={i}/>
      ))}
    </div>
  )
}

export default Row;