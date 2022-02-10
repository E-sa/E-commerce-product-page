import Cart from './Cart';
import { useState } from 'react';
import { useSelector } from "react-redux";


export default function CartIcon() {

    const onCart = useSelector(state => state)
    const [isCart, setCart] = useState(false);

    return (
        <>
            {/* cart logo */}
            <span id='cart-logo' onClick={() => setCart(!isCart)} ></span>
            {isCart && <Cart />}

            {/* orange circle on top of cart logo */}
            {onCart.addtoCart && 
            <div id="orange-circle">{onCart.addtoCart}</div>
            }

        </>
    )
}