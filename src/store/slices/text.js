import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: "text",
    initialState: "",
    reducers: {
        addText: (state, {payload}) => {
            return payload
        },   
        resetText: (state, {payload}) => {
            return ""
        }    
    }
})

export const selectText = state => state.text

export const { addText, resetText } = textSlice.actions

export const textReducer = textSlice.reducer