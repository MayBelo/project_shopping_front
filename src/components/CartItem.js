
// import Cart from "./Cart"
// import React, { useState,useEffect } from 'react';

// function CartItem({cart, removeItem, addToCart, updateQuantity, updatedCart }) {
//   const [totalPrice, setTotalPrice] = useState()
//   const initialValue = 0;

//   useEffect(() => {
//       const newTotalPrice = cart.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, initialValue);
//       setTotalPrice(newTotalPrice)
//   }, [cart])
//   return (
//     <div>
//         {cart.map(single_cart_item => <Cart key={single_cart_item.id} single_cart_item={single_cart_item} totalPrice={totalPrice} removeItem={removeItem} addToCart={addToCart} updateQuantity={updateQuantity} updatedCart={updatedCart} cart={cart}/>)}
      

//     </div>
//   )
// }

// export default CartItem
import Cart from "./Cart"
import React, { useState,useEffect } from 'react';

function CartItem({cart, removeItem, addToCart, updateQuantity, updatedCart }) {
  const [totalPrice, setTotalPrice] = useState()
  const initialValue = 0;


  
  useEffect(() => {
      const newTotalPrice = cart.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, initialValue);
      setTotalPrice(newTotalPrice)
  }, [cart])

  return (
    <div>
        {cart.map(single_cart_item => <Cart key={single_cart_item.id} single_cart_item={single_cart_item} totalPrice={totalPrice} removeItem={removeItem} addToCart={addToCart} updateQuantity={updateQuantity} updatedCart={updatedCart} cart={cart}/>)}
    
        {totalPrice > 0 ? (
        <h1>Total price to pay: ${totalPrice}</h1>
      ) : (
        <h1>The cart is empty.</h1>
      )}
    </div>
  )
}

export default CartItem