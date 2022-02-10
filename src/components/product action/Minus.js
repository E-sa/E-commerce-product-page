import { ReactComponent as MinusIcon } from "../../pictures/icon-minus.svg";
import { useDispatch } from "react-redux";
import { Decrement } from "../../redux/actions";


export default function Minus() {

    const dispatch = useDispatch();

    return (

        <MinusIcon 
         className="minus" 
         onClick={() => {dispatch(Decrement())}}
        />
        
    )
}



