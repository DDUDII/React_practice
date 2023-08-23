import React from "react";
import { BiCheckCircle, BiCircle } from "react-icons/bi";
import "./TodoItem.css";

const TodoItem = ({ todo, onCheckToggle }) => {
  const { text, id, checked } = todo; //객체구조분해를 이용하여 text를 가져와서 보여줌

  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""} `}>
        {checked ? (
          <BiCheckCircle //checkbox 상테에서 onclick 넣어주기
            onClick={() => {
              onCheckToggle(id); //id인자를 넣어줄땐 화살표 함수를 이용하여 넣어주어야함
            }}
          />
        ) : (
          <BiCircle
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div className="text">{todo.text}</div>
      </div>
    </div>
  );
};

export default TodoItem;
