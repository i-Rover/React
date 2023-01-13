import React, {useEffect, useState} from 'react';
import './App.css';
import 'react-bootstrap';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';
const AddButton = require('./components/AddButton');
const CollapseButton = require('./components/CollapseButton');

export const App = () => {
  const [showAddTodosForms, setShowAddTodosForms] = useState(false);
  const [todos, setTodos] = useState([
    {rowNumber:1,rowDescription:"Feed Cat",rowAssigned:"User One"},
    {rowNumber:2,rowDescription:"Water Plants",rowAssigned:"User Two"},
    {rowNumber:3,rowDescription:"Tidy Room",rowAssigned:"User Three"},
    {rowNumber:4,rowDescription:"Make Dinner",rowAssigned:"User Four"}
  ])
  const addTodo = (description:string, assigned:string) =>{
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
  const deleteTodos = (deleteTodoRowNumber:number) =>{
    let filtered = todos.filter(function(value){
      return value.rowNumber!=deleteTodoRowNumber;
    });
    console.log("filtered");
    console.log(filtered);
    setTodos(filtered);
  }
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodos={deleteTodos}/>
          <button className="btn btn-primary" 
                  onClick={() => setShowAddTodosForms(!showAddTodosForms)}>
          {!showAddTodosForms?<i className="bi bi-plus-circle-fill"></i>
          :<i className="bi bi-dash-circle-fill"></i>}
          </button>
          {
            showAddTodosForms && <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}
