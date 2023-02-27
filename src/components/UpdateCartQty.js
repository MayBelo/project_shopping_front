import { useState } from "react";
import { Container, Button} from 'react-bootstrap';


const UpdateCartQty = ({pk, updateQuantity}) => {

    const [quantity, setQuantity] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault()
        updateQuantity(pk, quantity)
        setQuantity(1)
    }       
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value >= 1) {
          setQuantity(value);
        
        }
      };
        return (
    <Container className="form-container">
    
    <form onSubmit={onSubmit}>
            <div className="form-control">
                <label> Quantity </label>
                <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />
            </div>
            <Button  variant="secondary" type="submit" className="submit-btn" >Save</Button>
        
        </form>
    </Container>
  )
}


export default UpdateCartQty