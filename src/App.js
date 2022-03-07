import './App.css';
import { Products } from './components/productsPage';
import { Navbar } from './components/header';
import { Routes, Route } from "react-router-dom";
import { Cart } from './components/cart';
import { Wishlist } from './components/wishlist';
import { Checkout } from './components/checkout';
import { Confirmation } from './components/confirm';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Products />}></Route>
          <Route path={'/cart'} element={<Cart />}></Route>
          <Route path={'/wishlist'} element={<Wishlist />}></Route>
          <Route path={'/checkout'} element={<Checkout />}></Route>
          <Route path={'/confirmation'} element={<Confirmation />}></Route>
        </Routes>
    </div>
  );
}

export default App;
