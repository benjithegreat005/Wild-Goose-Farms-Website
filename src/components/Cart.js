import { FaTimesCircle } from 'react-icons/fa'
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi'

const Cart = ({ selection, onDelete, minusAmount, plusAmount }) => {
  return (
    <form>
    <div className='selection'>
      <h3> {selection.text} 
        <FaTimesCircle onClick={() => onDelete(selection.id)}/>
      </h3> 
        <h3> {selection.amount} 
        <FiMinusSquare onClick={() => minusAmount(selection.id)}/>
        <FiPlusSquare style={{marginRight: 1200}} onClick={() => plusAmount(selection.id)} />
        </h3>
    </div>
    </form>
  )
}

export default Cart
