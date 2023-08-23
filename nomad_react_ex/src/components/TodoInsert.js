import React, { useState } from "react";
import "./TodoInsert.css";
import { BiCalendarPlus } from "react-icons/bi";

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write your todo"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <BiCalendarPlus />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
