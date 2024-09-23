import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { useDispatch } from 'react-redux';
import { setCurrentDocument } from '../../../store/Reducers/chatSlice';

interface ChatBoxProp {
    book: any;
}

const OpenChatboxButton: React.FC<ChatBoxProp> = ({ book }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        navigate(`/insightBot/${book._id}`)
        dispatch(setCurrentDocument(book.docs_name))
    }
    return (
        <div><a onClick={() => handleClick()} className='chat-link'> Open Chat Box using this context</a></div>
    )
}

export default OpenChatboxButton