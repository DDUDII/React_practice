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
    { id: 1, text: "할일 1", checked: false },
    { id: 2, text: "할일 2", checked: false },
    { id: 3, text: "할일 3", checked: false },
  ]);

  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev); //이전 값의 boolean 값을 반대로 해주는 것
    if (selectedTodo) {
      setSelectedTodo(null); //todoitem 선택하고나서 플러스 버튼 누를시 null값으로
    }
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

  const [selectedTodo, setSelectedTodo] = useState(null);
  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const today = new Date();
  const todayContent = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`;

  return (
    <Template
      className="Template"
      todoLength={todos.length}
      todayContent={todayContent}
    >
      {/* TodoList에 props로 todos를 넘겨줌  */}
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />

      {/* insertToggle이 true 일 경우에만 TodoInsert가 작동 */}
      {insertToggle && (
        <TodoInsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          selectedTodo={selectedTodo} //선택된 todo를 todoinsert에 넣어줌
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}

      <div className="add-todo-btn" onClick={onInsertToggle}>
        <BiPlusCircle />
      </div>
    </Template>
  );
};

export default App;
