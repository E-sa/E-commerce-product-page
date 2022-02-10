import Button from 'react-bootstrap/Button';
import ItemsInTheCart from './ItemsInTheCart';
import { useSelector } from "react-redux";

export default function Cart() {

    const onCart = useSelector(state => state)

    return (
        <div>

            <div className="cart rounded-3 d-flex flex-column justify-content-between border-0">

                <p 
                 id='cart-header'
                 className='bold p-2 m-0'
                >Cart</p>

                {/* when there is sth in the cart show the item */}
                {onCart.addtoCart &&
                    <>
                        <ItemsInTheCart quantity={onCart.addtoCart} />
                        <Button id="checkout-button" className=' align-self-center border-0 mb-3'>Checkout</Button>
                    </>
                }

                {/* when cart is empty display a text */}
                {!onCart.addtoCart && 
                   <p 
                     className='font-weight-bold h-100 m-auto' id='your-cart-is-empty'
                    >your cart is empty</p>
                }
                
            </div>

        </div>
    )
}