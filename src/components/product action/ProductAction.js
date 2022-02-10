import Minus from "./Minus";
import Plus from "./Plus";
import Counter from "./Counter";
import AddToCart_Button from "./AddToCart_Button"

export default function ProductAction() {

    return (
        <div className="mt-3 font-weight-bolder">

            <div
                id='quantity-box'
                className="d-inline-flex col-md-3 col-sm-12 rounded-3 mb-3 justify-content-around align-items-center "
            >
                <Minus />
                <Counter />
                <Plus />

            </div>


            <AddToCart_Button />

        </div>
    )
}