import { useState } from "react";
import { Container, Button } from 'react-bootstrap';

const AddToCartButton = ({ productId, addToCart }) => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToCart(productId, quantity);
    setQuantity(1);
  };

  return (
    <Container className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>
        <Button variant="secondary" type="submit" className="submit-btn">Save</Button>
      </form>
    </Container>
  );
}

export default AddToCartButton;