import React, {useState,useEffect} from 'react';
import './App.css';
import TodoList from './Componenents/todolist';
import Form from './Componenents/Form';

function App() {

  // state 
  const[inputText, setInputText] = useState("");
  const[todos, setTodos] = useState([]);
  const[status,setstatus] = useState('all');
  const [filtertodos, setfiltertodos] = useState([]);

  // Run once when app starts
  useEffect(() =>{
  getlocaltodos();
  },[]);




// use effect
  useEffect (() =>{
    filterHandler();
    savetolocaltodos();
   }, [todos,status]);

//functions
const filterHandler =()=>{
  switch(status){
       case "completed":
        setfiltertodos(todos.filter(todo =>todo.completed === true));
        break;
        case "uncompleted":
          setfiltertodos(todos.filter(todo =>todo.completed === false));
        break;
        default:
          setfiltertodos(todos);
          break;
      }
}
//save to local
const savetolocaltodos = () =>{
    localStorage.setItem('todos',JSON.stringify(todos));
};


const getlocaltodos = () =>{
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos',JSON.stringify([]));
  }
  else{
   let todolocal = JSON.parse(localStorage.getItem('todos'));
   setTodos(todolocal);
  }
};

 


  return (
    <div className="App">
      <header>
      <h1>
       I will Do {inputText}
      </h1>
      </header>
      <Form todos ={todos}
        inputText={inputText}
        setTodos={setTodos} 
        setInputText = {setInputText}
        setstatus = {setstatus}
        filtertodos={filtertodos}
        />
      <TodoList 
      filtertodos={filtertodos}
      setTodos={setTodos}
       todos ={todos}/>

    </div>
  );
}

export default App;
