import {useContext} from "react"
import {BasketContext} from "../contexts/basketContext"

export default function Basket(props){
    const {basket, setBasket} = useContext(BasketContext);
    const initialValue = 0;
    const sumWithInitial = basket.reduce(
        (previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price, initialValue
    ); // Here we add the totalt cost in the basket 
    function remove(id){
        setBasket((old) =>old.filter(item=>item.id!==id))
    } // removes object from basket
    return (
    <div>
        <ul>
            {basket.map((item) =>{
                return (
                    <li key={item.id}>
                        <button onClick={()=>remove(item.id)}>X</button>
                        {item.amount} x {item.productdisplayname} ${item.price} 
                    </li>
                );
            })}
        </ul>
        <div>Total: ${sumWithInitial}</div>
    </div>
    )
    }
