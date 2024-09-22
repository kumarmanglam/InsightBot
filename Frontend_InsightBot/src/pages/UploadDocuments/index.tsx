import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const UploadDocuments = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isValidType, setIsValidType] = useState<Boolean>(true);
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (selectedFile.type === 'application/pdf') {
                setIsValidType(true);
                setFile(selectedFile);
            } else {
                setIsValidType(false);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isValidType && file) {
            try {
                const formData = new FormData();
                formData.append('pdf', file); // Same as the curl command

                const response = await axios.post('http://localhost:3000/documents/uploadDocs', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                // Handle success response
                console.log(response.data);
                toast('📄 Document uploaded successfully!', {
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    theme: "light",
                });

                // Redirect or take some action after successful upload
                navigate("/viewDocuments");
            } catch (error) {
                // Handle error response
                console.error('Error uploading document:', error);
                toast('❌ Failed to upload document!', {
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    theme: "light",
                });
            }
        } else {
            toast('❌ Please select a valid PDF file!', {
                position: "top-right",
                autoClose: 2000,
                closeOnClick: true,
                theme: "light",
            });
        }
    };

    return (
        <div className='upload-container'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                theme="light"
            />
            <form className='upload-form' onSubmit={handleSubmit}>
                <div className='input-group'>
                    <label htmlFor="file-upload">Choose file:</label>
                    <input
                        id="file-upload"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                    />
                </div>
                <div>{!isValidType && <p>File type should be PDF</p>}</div>

                <div className='upload-action'>
                    <button className='upload-button' type='submit'>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default UploadDocuments;
