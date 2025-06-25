import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        getTodoAction: (state, action) => {
            state.todoList = action.payload.data;
        },
        addTodoAction: (state, action) => {
            console.log("action=>", action.payload);
            state.todoList.push(action.payload.todoDTO);
        }
    },
});



export const { getTodoAction, addTodoAction } = todoSlice.actions;

export default todoSlice.reducer;


