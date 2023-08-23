import { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoInsert from "./components/TodoInsert";
import { BiCheckCircle, BiCircle, BiPlusCircle } from "react-icons/bi";

//App함수 밖에 있어야 랜더링 되어도 4 값이 유지
let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, text: "할일 1", checked: true },
    { id: 2, text: "할일 2", checked: false },
    { id: 3, text: "할일 3", checked: true },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev); //이전 값의 boolean 값을 반대로 해주는 것
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할일을 입력해주세요!");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <Template className="Template" todoLength={todos.length}>
      {/* TodoList에 props로 todos를 넘겨줌  */}
      <TodoList todos={todos} onCheckToggle={onCheckToggle} />

      {/* insertToggle이 true 일 경우에만 TodoInsert가 작동 */}
      {insertToggle && (
        <TodoInsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}

      <div className="add-todo-btn" onClick={onInsertToggle}>
        <BiPlusCircle />
      </div>
    </Template>
  );
};

export default App;
