
const Square = ({circle, column, play}) => {
  let color = 'white';
  if (circle === 1) {
    color = 'red';
  } else if (circle === 2) {
    color ='yellow';
  }

  return (
    <span className='square'>
      <span className={color} onClick={() => {play(column)}}/>
    </span>
  )
}

export default Square;