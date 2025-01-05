import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: '',
    userId: ''
}

const TemplateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        setTemplate(state, action) {
            state.userName = action.payload.userName;
            state.userId = action.payload.userId;
        },

        setUserName(state, action) {
            state.userName = action.payload;
        },

        setUserId(state, action) {
            state.userId = action.payload;
        }
    }
})

export const { setTemplate, setUserName, setUserId } = TemplateSlice.actions;

export default TemplateSlice.reducer;