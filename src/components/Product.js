import { useState } from 'react';
import { Container, Button, Item } from 'semantic-ui-react'
import AddToCartButton from './AddToCartButton';


function Product({product,cart, addToCart}) {
  const [showAddItem, setShowAddItem] = useState(false);


  // const addToCartHandler =()=>{
  //   history.push(`/cart/${product.params.id}?qty=${qty}`)
  
  return (
    <Container>
        <Item.Group relaxed>
    <Item>
      <Item.Image size='small'  src={'http://localhost:8000/static'+product.image} alt={product.name} />

      <Item.Content verticalAlign='middle'>
        <Item.Header>{product.name}</Item.Header>
        <Item.Description>{product.description}</Item.Description>
        <Item.Extra>
          <h4>{product.price}</h4>
        
          
          <Button variant="primary" onClick={() => {setShowAddItem(!showAddItem)}}>{showAddItem ? "Close" : "Add To Cart"}</Button>
      {showAddItem && <AddToCartButton productId={product.id} addToCart={addToCart} />}        </Item.Extra>
      </Item.Content>

    </Item>
    </Item.Group>
    
    </Container>
  );
  }

  
export default Product