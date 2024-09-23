import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    chatHistory: [
    ],
    currentDocument: {},
}

const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatHistory(state: any, action: PayloadAction<any[]>) {
            state.chatHistory = action.payload;
        },
        setCurrentDocument(state: any, action: PayloadAction<any>) {
            console.log(action.payload);
            state.currentDocument = action.payload
        }
    }
})

export const { setChatHistory, setCurrentDocument } = ChatSlice.actions;

export default ChatSlice.reducer;