
const Square = ({square, column, play}) => {
  return (
    <span className='square' onClick={() => {play(column)}}>{square}</span>
  )
}

export default Square;