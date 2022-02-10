import { ReactComponent as PlusIcon } from "../../pictures/icon-plus.svg";
import { useDispatch } from "react-redux";
import { Increment } from "../../redux/actions";


export default function Minus() {

    const dispatch = useDispatch();
    
    return (
        <PlusIcon className="minus" onClick={() => {
            dispatch(Increment())
        }} />
    )
}



