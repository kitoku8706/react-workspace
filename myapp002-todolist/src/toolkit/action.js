import axios from "axios"
import { addTodoAction, getTodoAction } from "./todoSlice";
import { retry } from "@reduxjs/toolkit/query";

// axios : ajax의 라이브러리이다.
// ajx : 비동기화 요청을 처리, 데이터만 받음
// ajx의 라이브러리 : fetch, axios 가 있음 

function getTodos() {
    return async (dispatch) => {
        const data = await axios
            .get('/todo/all')
            .then((response) => {
                console.log("response=>", response);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        dispatch(getTodoAction({ data }));
    };
};

function insertTodo(input) {
    return async (dispatch) => {
        const data = await axios
            .post(`/todo`, { todoname: input })
            .then((response) => {
                console.log("insert =>", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
        dispatch(addTodoAction(data))
    }
}


function updateTodo(id, completed, todoname) {
    return async () => {
        await axios
            .put(`/todo`, { id: id, completed: completed, todoname: todoname })
            .then((reponse) => {
                return reponse.date;
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

function deleteTodo(id) {
    return async () => {
        await axios.delete(`/todo/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const todoAction = { getTodos, insertTodo, updateTodo, deleteTodo };



