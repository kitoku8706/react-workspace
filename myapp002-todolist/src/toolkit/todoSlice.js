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
        },
        updateTodoAction: (state, action) => {
            const idx = state.todoList.findIndex((todo) => String(todo.id) === String(action.payload.id));
            if (idx !== -1) {
                state.todoList[idx].completed =
                    state.todoList[idx].completed === 1 ? 0 : 1;
            }
        },
        deleteTodoAction: (state, action) => {
            state.todoList = state.todoList.filter((todo) => String(todo.id) !== String(action.payload.id))
        },


    },
});



export const { getTodoAction, addTodoAction, updateTodoAction, deleteTodoAction } = todoSlice.actions;

export default todoSlice.reducer;


