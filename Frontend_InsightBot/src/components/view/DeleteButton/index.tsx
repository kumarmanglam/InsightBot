import { useNavigate } from "react-router-dom";
import "./style.css"
import { useDispatch } from "react-redux";
import { callDeleteApi } from "../../../services/documentService";
interface DeleteProp {
    book: any;
}
const DeleteButton: React.FC<DeleteProp> = ({ book }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleClick = async () => {
        await callDeleteApi(book._id);
        window.location.reload();
    }
    return (
        <div><a onClick={() => handleClick()} className='delete-button'>Delete</a></div>
    )
}

export default DeleteButton