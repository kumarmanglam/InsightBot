import React from 'react'
import Table from '../../components/common/Table'
import { TABLE_HEADER_CONFIG_VIEW_DOCUMENTS } from '../../config/tableConfig'
import "./style.css"
import { useNavigate } from 'react-router-dom'

const books = [
    {
        book_id: "sdds",
        book_name: "Book 1",
    }
]

const ViewDocuments = () => {
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