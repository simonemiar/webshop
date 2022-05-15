import {useContext} from "react";
import {Link} from "react-router-dom";
import {BasketContext} from "../contexts/basketContext"

export default function Product(props){
    const {basket, setBasket} = useContext(BasketContext)
    function buy(){
        if(basket.find((item) => item.id === props.product.id)){
            console.log("in basket already"); // below makes it possible to create a copy of an object
            setBasket((old) => 
                old.map((item) => {
                    if (item.id === props.product.id) {
                        const copy = { ...item};
                        copy.amount++;
                        return copy;
                    }
                    return item;
                
            }))
        } else {
            setBasket((oldState) => [
                ...oldState,
                { ...props.product, amount: 1 },
            ]); // if an item already have been placed in the basket
        }
    }
    return(
    <article>
        <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="" />
        <h2>{props.product.productdisplayname}</h2>
        <p>{props.product.price}</p>
        <button onClick={buy}>Buy</button>
        <Link to={`/products/${props.product.id}`}>Read More</Link>
    </article>); 
}