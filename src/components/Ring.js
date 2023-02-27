import { useState } from 'react';
import { Container, Button, Item } from 'semantic-ui-react'


function Ring({ring,cart, addToCart}) {
  const [showAddItem, setShowAddItem] = useState(false);


  
  return (
    <Container>
        <Item.Group relaxed>
    <Item>
      <Item.Image size='small'  src={'http://localhost:8000/static'+ring.image} alt={ring.name} />

      <Item.Content verticalAlign='middle'>
        <Item.Header>{ring.name}</Item.Header>
        <Item.Description>{ring.description}</Item.Description>
        <Item.Extra>
          <h4>{ring.price}</h4>
        
          
          <Button variant="primary" onClick={() => {setShowAddItem(!showAddItem)}}>{showAddItem ? "Close" : "Add To Cart"}</Button>
      {showAddItem && <AddToCartButton productId={ring.id} addToCart={addToCart} />}        </Item.Extra>
      </Item.Content>

    </Item>
    </Item.Group>
    
    </Container>
  );
  }

  
export default Ring