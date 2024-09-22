import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./Reducers/chatSlice";

const reduxStore = configureStore({
    reducer: {
        chat: chatSlice,
    }
});

export default reduxStore;