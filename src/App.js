import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartItem from "./components/CartItem"
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Products from "./components/Products";
import 'semantic-ui-css/semantic.min.css'
import SearchButton from "./components/SearchButton";
import Rings from "./components/Rings";
import Search from "./components/Search";


function App() {
    //fetch products
    const [products, setProducts] = useState([])
    //trying to read cart item  
    const [cart, setCart] = useState([])
    const [session, setSession] = useState(localStorage.getItem('sessionID'))
    const [rings, setRing] = useState([])


    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
        }
        axios.get("http://localhost:8000/rings/", { headers: headers, withCredentials: true })
            .then((response) => setProducts(response.data))
    }, [session])


    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
        }
        axios.get("http://localhost:8000/products/", { headers: headers, withCredentials: true })
            .then((response) => setProducts(response.data))
        console.log('products read succesfully!')
    }, [session])

    //trying reading cart:
    useEffect(() => {
        let headers = {
            'Authorization': `Session ${session}`,
        }
        axios.get("http://localhost:8000/cart/", { headers: headers, withCredentials: true })
            .then((response) => setCart(response.data))
        console.log('cart_item read successfully!')
        
    }, [session])

    // this function logs the user in
    function login(user, pass) {
        axios.post('http://localhost:8000/login/', {
            username: user,
            password: pass,
        })
            .then(response => {
                console.log(response.data);
                setSession(response.data.session)
                localStorage.setItem('sessionID', response.data.session)
            })
            .catch(error => {
                console.log(error);
                alert("something went wrong")
            });
    }
    function logout() {
        let headers = {
            'Authorization': `Session ${session}`,
        }
        axios.post("http://localhost:8000/logout/", { headers: headers, withCredentials: true })
        localStorage.removeItem('sessionID')
        setSession(null)
 
    }

        // add product to cart 
        const addToCart = async (productId, quantity) => {
            try {
                const response = await fetch(`http://localhost:8000/cartAdd/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'productId': productId, 'quantity': quantity }),
                });
                alert(`${quantity} Jewelries Added To Cart`)
                if (!response.ok) {
                    throw new Error('Failed to add to cart!');
                }
                const updatedCart = await response.json();
                setCart(updatedCart);
            } catch (err) {
                console.error(err);
            }
        }


        // update cart quantity         
        const updateQuantity = async (pk, quantity) => {

            try {
                const response = await fetch(`http://localhost:8000/cartUpdate/${pk}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "quantity":quantity }),
                });

                if (!response.ok) {
                    throw new Error('Failed to update !');
                }

                // get the updated cart items
                const updatedCart = await fetch(`http://localhost:8000/cart/`)
                    .then((response) => response.json())
                    .then((data) => data);

                setCart(updatedCart);
            } catch (err) {
                console.error(err);
            }
        }

        // remove/delete item from cart
        const removeItem = async (pk) => {
            await fetch(`http://localhost:8000/cartDelete/${pk} `, {
                method: 'DELETE'
            })

            setCart(cart.filter((cartitem) => cartitem.id !== pk))
        }


        // //search for item

        // const Search = async(query) => {
        //     axios.get(`http://localhost:8000/search/?q=${query}`).then(response => {
        //       setResults(response.data);
        //     });
        //   }
    

    return (
        <div className="container">
            <BrowserRouter>

                {session ? <>
                    <Header logout={logout} addToCart={addToCart}  />
                    <Routes>
                        <Route path="/" element={<Products products={products} cart={cart} addToCart={addToCart} />} exact />
                        <Route path="/cart" element={<CartItem updateQuantity={updateQuantity} removeItem={removeItem} cart={cart} />} />
                        <Route path="/logout" element={<Products />} />
                     
                        {/* <Route path="/search" element={<Search addToCart={addToCart} />} /> */}
                        <Route path="/rings" element={<Rings  cart={cart} rings={rings} addToCart={addToCart} />} />
                    </Routes>
                </> :
                    <Routes>
                        <Route path="*" element={<LoginPage login={login} />} />
                    </Routes>

                }



            </BrowserRouter>

        </div>
    );
}

export default App;