import { Link, Routes, Route, } from "react-router-dom";
import Home from "../src/routes/Home";
import Products from "../src/routes/Products";
import SingleProduct from "../src/routes/SingleProduct";
import BasketContainer from "./components/BasketContainer";
import {BasketProvider} from "../src/contexts/basketContext";

export default function App(){
  return(
  <div id="app">
    <header>
      <nav>
        <Link to="/">HOME</Link> | {" "} <Link to="/products">PRODUCTS</Link>
      </nav>
    </header>
    <BasketProvider>
    <BasketContainer/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={ <SingleProduct />} />
    </Routes>
    </BasketProvider>
  </div>);

}