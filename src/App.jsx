import Navbar from "./components/Navbar"
import SubNavbar from "./components/SubNavbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Footer from "./components/Footer"
import CartPage from "./pages/Cart"
import OrderPage from "./pages/Order"
import Topbar from "./components/Topbar"
const App = () => {  
  return (
    <Router>
      <Topbar/>
      <Navbar/>
      <SubNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/product/:slug" element={<ProductDetails/>}/>
        <Route path='/my-cart' element ={<CartPage></CartPage>}/>
        <Route path='/my-order' element ={<OrderPage></OrderPage>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App