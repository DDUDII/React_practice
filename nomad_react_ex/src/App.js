import { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoInsert from "./components/TodoInsert";
import { BiCheckCircle, BiCircle, BiPlusCircle } from "react-icons/bi";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "할일 1", checked: true },
    { id: 2, text: "할일 2", checked: true },
    { id: 3, text: "할일 3", checked: true },
  ]);
  return (
    <Template className="Template" todoLength={todos.length}>
      {/* TodoList에 props로 todos를 넘겨줌  */}
      <TodoList todos={todos} />
      <div className="add-todo-btn">
        <BiPlusCircle />
      </div>
      <TodoInsert />
    </Template>
  );
};

export default App;
