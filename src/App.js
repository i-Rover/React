import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-bootstrap';
import AddButton from './components/AddButton'
import CollapseButton from './components/CollapseButton';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [showAddTodosForms, setShowAddTodosForms] = useState(false);
  const [todos, setTodos] = useState([
    {rowNumber:1,rowDescription:"Feed Cat",rowAssigned:"User One"},
    {rowNumber:2,rowDescription:"Water Plants",rowAssigned:"User Two"},
    {rowNumber:3,rowDescription:"Tidy Room",rowAssigned:"User Three"},
    {rowNumber:4,rowDescription:"Make Dinner",rowAssigned:"User Four"}
  ])
  const addTodo = (description, assigned) =>{
    var rowNumber = checkAndIncrementRowNumber();
    const newTodos = {
      rowNumber:rowNumber,
      rowDescription:description,
      rowAssigned:assigned
    }
    console.log("setTodos");
    setTodos(todos => [...todos, newTodos]);
  }
  const checkAndIncrementRowNumber = () =>{
    var rowNumber = 0;
    if(todos.length>0){
      rowNumber = todos[todos.length-1].rowNumber+1;
    }else{
      rowNumber = 1;
    }
    return rowNumber;
  }
  const deleteTodos = (deleteTodoRowNumber) =>{
    let filtered = todos.filter(function(value){
      return value.rowNumber!=deleteTodoRowNumber;
    });
    console.log("filtered");
    console.log(filtered);
    setTodos(filtered);
  }
  return (
    <div class="mt-5 container">
      <div class="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div class="card-body">
          <TodoTable todos={todos} deleteTodos={deleteTodos}/>
          <button class="btn btn-primary" 
                  onClick={() => setShowAddTodosForms(!showAddTodosForms)}>
                  {!showAddTodosForms?
                  <AddButton/>:<CollapseButton/>}
          </button>
          {
            showAddTodosForms && <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
