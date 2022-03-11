import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Checkout/Confirmation';
import './App.css'


const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})
  const [orderInfo, setOrderInfo] = useState({})
  const [orderError, setOrderError] = useState('')

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)

    setCart(cart)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, {quantity})

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId)

    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()

    setCart(cart)
  }

  const refreshCart = async () => {
    const newCartData = await commerce.cart.refresh()

    setCart(newCartData)
  }

  const handleCheckout = async (checkoutId, orderData) => {
    try {
      // const incomingOrder = await commerce.checkout.capture(
      //  checkoutId,
      //  orderData
      // )
      setOrderInfo(orderData)

      refreshCart()
    } catch (error) {
      setOrderError(
        (error.data && error.data.error && error.data.error.message) ||
        'Uh oh! An error has occurred.'
      )
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  return (
    <>
      <Router>
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/menu"
            element={<Menu products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />}
          />
          <Route 
            exact
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart} 
              />
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <Checkout 
                cart={cart}
                handleCheckout={handleCheckout} 
              />
            }
          />
          <Route
            exact
            path="/confirmation"
            element={
              <Confirmation 
                cart={cart}
                orderInfo={orderInfo}
                orderError={orderError}
              />
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;