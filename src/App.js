import React, {useState} from 'react';
import './App.css';
import TodoList from './Componenents/todolist';
import Form from './Componenents/Form';

function App() {
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>
       Rohan's To-do List {inputText}
      </h1>
      </header>
      <Form todos ={todos}
        inputText={inputText}
        setTodos={setTodos} 
        setInputText = {setInputText}
        />
      <TodoList />

    </div>
  );
}

export default App;
