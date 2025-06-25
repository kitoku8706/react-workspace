import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../toolkit/action';

const Input = () => {
    const inputRef = useRef();
    const [input, setInput] = useState("");

    const handleChangeText = (e) => {
        // setInput(e.target.value);
        setInput(document.querySelector("#work").value);
    }

    const dispatch = useDispatch();

    const insertTodo = async (e) => {
        e.preventDefault();

        // await dispatch(todoAction.insertTodo(input));
        // setInput("");
        // await dispatch(todoAction.getTodos());
        dispatch(todoAction.insertTodo(input));
        setInput("");

    }


    return (
        <>
            <form onSubmit={insertTodo}>
                <input type="text" id="work" ref={inputRef} value={input} onChange={handleChangeText} />
                <input type="submit" value="Create" />
            </form>
        </>
    );
};

export default Input;