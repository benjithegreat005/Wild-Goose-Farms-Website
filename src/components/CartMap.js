import Cart from './Cart'

const CartMap = ({ selection, onDelete, minusAmount, plusAmount }) => {
  return (
    <>
      { selection.map((selection) => (
      <Cart key={selection.id} selection={selection} onDelete={onDelete} minusAmount={minusAmount} plusAmount={plusAmount} />
      ))}
    </>
  )
}

export default CartMap
