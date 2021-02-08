import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const persistedTodos = JSON.parse(localStorage.getItem("TO_DO_LIST"));
    if (persistedTodos) setTodos(persistedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("TO_DO_LIST", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => setTodos([todo, ...todos]);

  const removeTodo = (id) => {
    const todosFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(todosFiltered);
  };

  return (
    <div style={{ marginLeft: "2rem" }}>
      <p>Todo Liste</p>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? (
        <div style={{ marginTop: "2rem" }}>Die Todo Liste ist leer.</div>
      ) : (
        <TodoList todos={todos} removeTodo={removeTodo} />
      )}
    </div>
  );
};

export default App;
