import Button from 'react-bootstrap/Button';
import { ReactComponent as Cart_icon } from "../../pictures/icon-cart.svg";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../../redux/actions";

export default function AddToCart_Button() {

    const dispatch = useDispatch();

    return (

        <Button
            id='add-to-cart-botton'
            className="d-inline-flex col-md-4 col-sm-12 ml-lg-3 ml-md-3 rounded-3 border-0 justify-content-center align-items-center"
            onClick={() => {dispatch(AddtoCart())}}
        >

            <Cart_icon id="cart-icon-in-button" />
            
            <p className="d-inline ml-3 mb-0">Add to cart</p>

        </Button>
    )
}