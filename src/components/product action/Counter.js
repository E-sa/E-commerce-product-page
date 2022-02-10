import { useSelector } from "react-redux";


export default function Counter() {

    const quantity = useSelector(state => state)

    return (
        <span id="quantity">{quantity.counter}</span>

    )


}