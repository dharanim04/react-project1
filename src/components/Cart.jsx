import React from 'react';

import {useCart} from '../context/Cart'

const Cart = () =>{
    const cart = useCart();
    const totalBill = cart.items ? cart.items.reduce((a,b)=>a+b.price,0):0;
    return(
        <div>
            <h1>Cart</h1>
            {cart && cart.items.map((item) =>(
                <li>{item.name}</li>
            )
            )}
        <h5>TotalBill: ${totalBill}</h5>
        </div>
    )
}

export default Cart;