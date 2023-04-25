import { configureStore } from "@reduxjs/toolkit";
import { textReducer } from "./slices/text";
import { todoReducer } from "./slices/todos";

const store = configureStore({
    reducer: {
        text: textReducer,
        todos: todoReducer,
    }
})

export default store