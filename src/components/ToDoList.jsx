import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const handleCompleted = (todo) => {
    setTodos(
      todos.map( (item) => 

       item.id === todo.id && { ...item, completed: !item.completed }
      )
    );
  };

  console.log(todos);
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
          ADD
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <li className="list-item" key={todo.id}>
            <button className="complete btn">
              <FaCheckCircle onClick={() => handleCompleted(todo)} />
            </button>

            <p className={`list ${todo.completed && "complete-todo"}`} >{todo.title}</p>

            <div>
              <button className="edit btn">
                <FaEdit />
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
