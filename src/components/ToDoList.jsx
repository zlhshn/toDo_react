import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ToDoList = () => {
const [input , setInput] = useState()

const handleChange = ()=>{



}


  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="enter a react todo"
          className="input"
          onChange={handleChange}
        />
        <button className="add">ADD</button>
      </form>
    </div>
  );
};

export default ToDoList;
