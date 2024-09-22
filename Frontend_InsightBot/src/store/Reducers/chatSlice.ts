import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    chatHistory: [
    ]
}

const ChatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChatHistory(state: any, action: PayloadAction<any[]>) {
            state.chatHistory = action.payload;
        }
    }
})

export const { setChatHistory } = ChatSlice.actions;

export default ChatSlice.reducer;