import React, { useEffect, useRef, useState } from 'react';

import "./style.css";
import upload2 from "../../../assets/icons/upload2.png"
import { useDispatch, useSelector } from 'react-redux';
import { selectChatHistory } from '../../../store/Selectors/chatSelector';
import { callConversationAPI } from '../../../services/conversation';
import { setChatHistory } from '../../../store/Reducers/chatSlice';
import { useParams } from 'react-router-dom';
export interface ChatEntry {
    Human: string,
    AI: string,
}
const InputPrompt = () => {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [query, setQuery] = useState<string>("");

    const chatHistory = useSelector(selectChatHistory);
    const dispatch = useDispatch();


    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.style.opacity = buttonDisabled ? '0.5' : '1';
            buttonRef.current.style.cursor = buttonDisabled ? 'initial' : 'pointer'
        }
    }, [buttonDisabled]);

    const { book_id } = useParams();



    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setButtonDisabled(e.target.value.trim().length == 0);
    }

    const handlePromptSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            setButtonDisabled(true);
            // await hitAPI(query);
            event.preventDefault();
            dispatch(setChatHistory([...chatHistory, { "Human": query }]));
            const prompt = query;
            setQuery("");
            const response = await callConversationAPI(book_id, query);
            setButtonDisabled(false);
            // console.log(response?.response);
            const chatEntry = {
                "Human": query,
                "AI": response?.data.answer,
            };
            dispatch(setChatHistory([...chatHistory, chatEntry]));
            // console.log([...chatHistory, chatEntry]);
        } catch (error) {
            const chatEntry = {
                "Human": query,
                "AI": "I appreciate your inquiry, but I’m not in a position to respond to that specific question right now.",
            };
            dispatch(setChatHistory([...chatHistory, chatEntry]));
        }

    }


    return (
        <div className='input-prompt' >
            <form className="chat-input-container" onSubmit={(e) => handlePromptSubmit(e)}>
                <input
                    className="chat-input-textarea"
                    placeholder="Message FoxAI"
                    value={query}
                    onChange={(e) => handleInputValueChange(e)}
                />
                <button ref={buttonRef} className=' chat-input-send' disabled={buttonDisabled} >
                    <img src={upload2} className={`upload-icon ${buttonDisabled ? 'disabled-button' : 'show-button'}}`} />
                </button>
            </form>
            <div className="disclaimer-box">
                <p>InsightBot can make mistakes. Check important info.</p>
            </div>
        </div>
    )
}

export default InputPrompt;