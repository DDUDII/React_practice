import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        // todolist가 받은 props를 todoitem에 전달
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
