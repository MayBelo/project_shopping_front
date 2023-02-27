import { Container, Button, Item } from 'semantic-ui-react'
// import Products from './Products';
import {  useState } from "react";
import UpdateCartQty from './UpdateCartQty';




  function Cart({single_cart_item, updateQuantity,removeItem, totalPrice}) {
    const [showUpdateQuantity, setShowUpdateQuantity] = useState(false);
    const answer = single_cart_item.product.price*single_cart_item.quantity // Calculate the answer using JavaScript
  
 
  return (
<div>
    <Container>
      
<Item.Group relaxed>
<Item>
<Item.Image size='small'  src={'http://localhost:8000/static'+ single_cart_item.product.image} alt={single_cart_item.product.name} />

<Item.Content verticalAlign='middle'>
<Item.Header><h1>{single_cart_item.product.name}</h1></Item.Header>
<Item.Description>Quantity: {single_cart_item.quantity}</Item.Description>
<Item.Extra>
<h3>Total Price: ${answer}</h3>
</Item.Extra>
</Item.Content>

</Item>
</Item.Group>

      <Button variant="light" onClick={() => {setShowUpdateQuantity(!showUpdateQuantity)}}> {showUpdateQuantity ? "Close" : "Update Quantity"} </Button>
          {showUpdateQuantity && <UpdateCartQty pk={single_cart_item.id} updateQuantity={updateQuantity} />}
          {!showUpdateQuantity &&<Button variant="info" onClick={()=>removeItem(single_cart_item.id)} > Remove </Button>}
          

          </Container>

 </div>
 
      );
    }

    

  

export default Cart



