import React from "react";
import { BiCheckCircle, BiCircle } from "react-icons/bi";
import "./TodoItem.css";

const TodoItem = ({ todo }) => {
  const { text, id, checked } = todo; //객체구조분해를 이용하여 text를 가져와서 보여줌

  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""} `}>
        {checked ? <BiCheckCircle /> : <BiCircle />}
        <div className="text">{todo.text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
