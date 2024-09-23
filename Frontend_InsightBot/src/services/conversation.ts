import axios from "axios";
import { ChatEntry } from "../components/common/InputPrompt";
interface responseObject {
    response: string
}
const fakeAPI = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("good response");
        }, 500);
    });
};

export const callConversationAPI = async (pdfId: string | undefined, query: string): Promise<any> => {
    const url = 'http://localhost:3000/conversations/conversation';

    const requestData = {
        userId: "66ee8271f2e8c6679c7cdeda",
        pdfId,
        userRole: "user",
        query,
    };
    try {
        const response = await axios.post(url, requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Error hitting the API:', error);
        throw error;
    }
};

export const getChatHistoryAPI = async (): Promise<ChatEntry[]> => {
    const response = await axios.get<ChatEntry[]>('http://172.16.21.248:3000/conversation/chatHistory');
    console.log(response);
    return response.data;
};