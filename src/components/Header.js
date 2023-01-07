import Button from "./Button"

const Header = ({ onShow_c, onShow_s, show_cart, show_shop }) => {



  return (
    <header>
      <h1 style = {{ fontFamily: 'cursive', fontSize: 75, textAlign: 'center'}}> Wild Goose Farms </h1>
        <h1 style = {{ textAlign: 'left' }}> 
        <Button onClick={onShow_s} color='green' text={show_shop ? 'Hide Shop Window' : 'Shop'} />
        </h1>
        <h1 style = {{ textAlign: 'left' }}>
        <Button onClick={onShow_c} color='black' text={show_cart ? 'Hide Cart' : 'Cart'} />
        </h1>
    </header>
  )
}

export default Header
