import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, {payload}) => {
            return [
                {
                    id: new Date().getTime(),
                    text: payload,
                    completed: false,
                },
                ...state,
            ]
        },
        deleteTodo: (state, {payload}) => {
            return [...state.filter(todo => todo.id !== payload)]
        },
        checkedTodo: (state, {payload}) => {
            return [
                ...state.map((el) => {
                    if (el.id !== payload) return el;
                    return {
                      ...el,
                      completed: !el.completed,
                    };
                  }),
            ]
        },
        deleteAllCompleted: (state, {payload}) => {
            return [
                ...state.filter(todo => !todo.completed)
            ]
        }
    }
})

export const selectTodo = state => state.todos

export const { addTodo, deleteTodo, checkedTodo, deleteAllCompleted} = todoSlice.actions

export const todoReducer = todoSlice.reducer