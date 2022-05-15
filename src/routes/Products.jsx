import {useState, useEffect} from "react"
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import styles from "../App.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts(){
      const res = await fetch("https://kea-alt-del.dk/t7/api/products")
      const data = await res.json();
      setProducts(data);

    }
    getProducts();
  }, [])
  return (
    <div className={styles.App}>
      <ProductList products={products}/>
    </div>
  );
}

export default Products;
