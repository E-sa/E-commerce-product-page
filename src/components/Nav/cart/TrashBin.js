import { ReactComponent as TrashBin_icon } from "../../../pictures/icon-delete.svg";
import { useDispatch } from "react-redux";
import { Trashbin_CLicked } from "../../../redux/actions";

export default function TrashBin() {

    const dispatch = useDispatch();

    return (

        <TrashBin_icon id="trash-bin" onClick={() => {
            dispatch(Trashbin_CLicked())
        }} />
        
    )
}