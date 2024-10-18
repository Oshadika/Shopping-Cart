import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/shop/Shop";
import Cart from "./Pages/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import ShopCOntext from "./Context/ShopCOntext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <ShopCOntext>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </ShopCOntext>
    </div>
  );
}

export default App;
