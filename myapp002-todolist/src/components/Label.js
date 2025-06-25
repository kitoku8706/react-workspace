import React from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../toolkit/action';

const Label = ({ todo }) => {
    const dispatch = useDispatch();
    const updateTodo = async (id, completed, todoname) => {
        await dispatch(todoAction.updateTodo(id, completed, todoname));
        await dispatch(todoAction.getTodos());
    };

    const deleteTodo = async (id) => {
        await dispatch(todoAction.deleteTodo(id));
        await dispatch(todoAction.getTodos());
    };

    return (
        <>
            <label onClick={() => updateTodo(todo.id, todo.completed, todo.todoname)}
                className={todo.completed == 1 ? "completed" : null}>
                {todo.todoname}
            </label>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </>
    );
};

export default Label; 