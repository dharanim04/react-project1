import React from 'react';
import {useCart} from '../context/Cart'

 const Item = (props) =>{
    const cart = useCart();

    return (
    
    <div className='item-card'>
        <div>Item</div>
        <h4>Item Name {props.name}</h4>
        <p> Price: ${props.price}</p>
        <button
        onClick={()=>{
             return cart.setItems([
            ...cart.items,
            {name: props.name, price: props.price},
        ])
    }
        }>Add to chart</button>
    </div>)
}

export default Item;