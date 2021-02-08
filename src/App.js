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

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const markAsCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const checkIfTodoListEmpty = () => {
    let toDoListEmpty = true;
    todos.forEach((todo) => {
      if (!todo.completed) {
        toDoListEmpty = false;
        return;
      }
    });
    return toDoListEmpty;
  };

  return (
    <div style={{ marginLeft: "2rem" }}>
      <p>Todo Liste</p>
      <TodoForm addTodo={addTodo} />
      {checkIfTodoListEmpty() ? (
        <div style={{ marginTop: "2rem" }}>Die Todo Liste ist leer.</div>
      ) : (
        <TodoList todos={todos} markAsCompleted={markAsCompleted} />
      )}
    </div>
  );
};

export default App;
