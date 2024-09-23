import axios from "axios";


export const callDeleteApi = async (pdfId: string): Promise<any> => {
    const url = `http://localhost:3000/documents/deleteDocs?documentId=${pdfId}`;

    try {
        const response = await axios.delete(url);
        return response;
    }
    catch (error) {
        console.error('Error hitting the API:', error);
        throw error;
    }

}
