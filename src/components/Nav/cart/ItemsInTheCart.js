import { Images } from "../../display of product images/ImportOfAllImages"
import TrashBin from "./TrashBin";


export default function ItemsInTheCart(quantity) {

    return (

        <div
            className="cart-item-container d-flex align-items-center p-3"
        >
            <img
                src={Images[4]}
                id="cart-item-image"
                alt="purchased-item-image"
                className="rounded"
            />

            <div
                className="cart-item-info-container mx-2"
            >
                <p
                    id="cart-item-name"
                    className="d-inline-block w-100 mb-0"
                >Fall Limited Edition Sneakers</p>

                <p
                    className="d-inline"
                >$125.00</p>

                <p
                    className="d-inline"
                >  x{quantity.quantity}  </p>

                <p
                    id="cart-item-total-price"
                    className="d-inline font-weight-bold"
                >${quantity.quantity * 125}</p>

            </div>

            <TrashBin />

        </div>
    )
}