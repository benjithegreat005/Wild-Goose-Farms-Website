import ShopWindow from './ShopWindow'
import { useRef } from "react"

const Shop = ({ items, search, addItem }) => {

    const inputRef = useRef(null)

    const keyPress = (event) => {
        if(event.key === 'Enter'){
            getValue()
        }
    }    

    function getValue() {
        search(inputRef.current.value);
      }

  return (
    <>
        <div style = {{ textAlign: 'center' }} >
            <label> Search Items: </label>
            <input type='text' placeholder='search' id='message' name='message' onKeyPress={keyPress} ref={inputRef} />
        </div>
      { items.map((items) => (
      <ShopWindow key={items.id} items={items} addItem={addItem} />
      ))}
    </>
  )
}

export default Shop