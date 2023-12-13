import React from "react";
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const ToDoList = () => {

    const initial = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initial);
  const [edit, setEdit] = useState(null);


  useEffect(()=>{

    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          title: input,
          completed: false,
        },
      ]);

     
    } else {
      uptadeTodo(input, edit.id, edit.completed);
    }

    setInput("");
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleCompleted = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = (todo) => {
    setInput(todo.title);

    const findTodo = todos.find((item) => item.id === todo.id);
    setEdit(findTodo);
  };

  const uptadeTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter a react todo"
          className="input"
          onChange={handleChange}
          value={input}
          required
        />
        <button className="add" type="submit">
          {edit ? "OK" : "ADD"}
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <button className="complete btn">
              <FaCheckCircle onClick={() => handleCompleted(todo)} />
            </button>

            <p className={`list ${todo.completed && "complete-todo"}`}>
              {todo.title}
            </p>

            <div>
              <button className="edit btn">
                <FaEdit onClick={() => handleEdit(todo)} />
              </button>
              <button className="delete btn">
                <FaTrashAlt onClick={() => handleDelete(todo)} />
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
