
const Square = ({square, column, play}) => {
  let color = 'white';
  if (square === 1) {
    color = 'red';
  } else if (square === 2) {
    color ='yellow';
  }

  return (
    <span className='square'>
      <span className={color} onClick={() => {play(column)}}/>
    </span>
  )
}

export default Square;