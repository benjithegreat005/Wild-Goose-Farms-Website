import Button from "./Button"

const ShopWindow = ({ items,  addItem }) => {
  

  return (
    <form>
      <div className='selection'>
          <h3> 
            {items.text} 
            <Button onClick={() => addItem(items.text)} color='black' text='Add to Cart' />
          </h3>
      </div>
    </form>
  )
}

export default ShopWindow
