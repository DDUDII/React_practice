import React, { useEffect, useState } from "react";
import "./TodoInsert.css";
import { BiCalendarPlus, BiTrash, BiPencil } from "react-icons/bi";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate,
}) => {
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

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          type="text"
          placeholder="write your todo"
          value={value}
          onChange={onChange}
        ></input>
        {selectedTodo ? (
          <div className="rewrite">
            <BiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <BiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <BiCalendarPlus />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;
