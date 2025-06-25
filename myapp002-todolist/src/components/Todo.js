import React from 'react';
import { useSelector } from 'react-redux';
import Label from './Label';

const Todo = () => {
    const todos = useSelector((state) => state.todo.todoList);
    return <>
        {todos && todos.map((todo) => {
            return (
                <div className='todo' key={todo.id}>
                    <Label todo={todo} />
                </div>
            )
        })}
    </>

};

export default Todo; 