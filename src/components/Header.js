import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchButton from './SearchButton';



function Header({logout, addToCart} ) {

  
  return (
    
    <div className="Container">
    

    <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/" className="header">Shopping Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <NavDropdown title="Our Products" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Earrings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Necklaces
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Bracelets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">Rings</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>

            <Nav.Link onClick={logout} ><i className="fas fa-user"></i>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>

    </Navbar>

    <SearchButton addToCart={addToCart}/>

        </div>
  )
}

export default Header