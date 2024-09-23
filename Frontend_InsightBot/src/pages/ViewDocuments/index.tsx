import React, { useEffect, useState } from 'react'
import Table from '../../components/common/Table'
import { TABLE_HEADER_CONFIG_VIEW_DOCUMENTS } from '../../config/tableConfig'
import "./style.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setChatHistory } from '../../store/Reducers/chatSlice'



const ViewDocuments = () => {
    const dispatch = useDispatch();
    const [books, setBooks] = useState([]);

    const getDocuments = async () => {
        const data = await axios.get("http://localhost:3000/documents/getAllDocs");
        console.log(data.data);
        setBooks(data.data);
    }

    useEffect(() => {
        getDocuments();
        dispatch(setChatHistory([]))
    }, [])

    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/uploadDocument")
    }
    return (
        <div>
            <div className="view-license-container">
                <div><button className='upload-button' onClick={(e) => handleSubmit(e)}>Upload new Document</button></div>
                <div className="table-container">
                    <Table headerConfig={TABLE_HEADER_CONFIG_VIEW_DOCUMENTS} data={books} />
                </div>
            </div>
        </div>
    )
}

export default ViewDocuments