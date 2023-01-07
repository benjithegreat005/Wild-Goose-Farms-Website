import { useState } from "react"
import Header from "./components/Header"
import CartMap from "./components/CartMap"
import Shop from "./components/Shop"

function App() {
  const [selection, cart] = useState(
      [{
        id: 1,
        text: 'Eggs (dozen)',
        amount: 1,
    },
    {
        id: 2,
        text: 'Whole Milk (gallon)',
        amount: 1,
    }]
)

const [items, shop] = useState(
      [{
        id: 1,
        text: 'Eggs (dozen)',
        searchVal: 'eggs',
    },
    {
        id: 2,
        text: 'Whole Milk (gallon)',
        searchVal: 'milk',
    }]
)

  const [show_cart, set_show_cart] = useState(false)
  const [show_shop, set_show_shop] = useState(false)

  const deleteItem = (id) => {
    cart(selection.filter((selection) => selection.id !== id))
  }

  const plusAmount = (id) => {
    cart(selection.map((selection) => selection.id === id ? { ...selection, amount: selection.amount + 1 }: selection))
  }

  const minusAmount = (id) => {
    cart(selection.map((selection) => selection.id === id ? { ...selection, amount: selection.amount - 1 }: selection))
  }

  const addItem = (text) => {
    console.log(text)
  }

  const search = (text) => {
    shop(items.filter((items) => items.searchVal === text))
  }


  return (
    <div className="container">
      <Header onShow_c={
        () => set_show_cart(!show_cart)} show_cart={show_cart}   
        onShow_s={
          () => set_show_shop(!show_shop)} show_shop={show_shop} />
      {show_shop && <Shop items={items} search={search} addItem={addItem} /> }
      {show_cart && <CartMap selection={selection} onDelete={deleteItem} minusAmount={minusAmount} plusAmount={plusAmount} /> }
      {show_cart && <input type='submit' value='Place Order' className='btn btn-block' /> }
    </div>
  );
}

export default App;
