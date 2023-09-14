import Navbar from "./components/Navbar"
import SubNavbar from "./components/SubNavbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Footer from "./components/Footer"
import CartPage from "./pages/Cart"
const App = () => {  
  return (
    <Router>
      <Navbar/>
      <SubNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/product/:slug" element={<ProductDetails/>}/>
        <Route path='/my-cart' element ={<CartPage></CartPage>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App