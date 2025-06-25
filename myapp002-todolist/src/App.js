
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { todoAction } from './toolkit/action';
import Todo from './components/Todo';
import Input from './components/Input';



function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoAction.getTodos());
  });


  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <Input />
      <Todo />

    </div>
  );
}

export default App;
