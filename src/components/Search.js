import React from 'react'
import AddToCartButton from "./AddToCartButton"
import { Container, Button, Item } from 'semantic-ui-react'
import { useState } from "react";

function Search({ result, addToCart }) {
  const [showAddItem, setShowAddItem] = useState(false);

  return (
    <Container>
      <Item.Group relaxed>
        <Item>
          <Item.Image size='small' src={'http://localhost:8000/static' + result.image} alt={result.name} />
          <Item.Content verticalAlign='middle'>
            <Item.Header>{result.name}</Item.Header>
            <Item.Description>{result.description}</Item.Description>
            <Item.Extra>
              <h4>{result.price}</h4>
              <Button variant="primary" onClick={() => { setShowAddItem(!showAddItem) }}>{showAddItem ? "Close" : "Add To Cart"}</Button>
              {showAddItem && <AddToCartButton productId={result.id} addToCart={addToCart} />}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default Search;
