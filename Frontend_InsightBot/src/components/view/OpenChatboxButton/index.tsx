import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./style.css";

interface ChatBoxProp {
    book_id: string;
}

const OpenChatboxButton: React.FC<ChatBoxProp> = ({ book_id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/insightBot/:${book_id}`)
    }
    return (
        <div><a onClick={() => handleClick()} className='chat-link'> Open Chat Box using this context</a></div>
    )
}

export default OpenChatboxButton