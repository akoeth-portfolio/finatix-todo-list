import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    todos &&
    todos.map((todo) => (
      <div
        key={todo.id}
        style={{
          display: "flex",
          marginTop: "2rem",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{todo.title}</div>
        <div style={{ marginLeft: "1rem" }}>{todo.note}</div>
        <button
          onClick={() => removeTodo(todo.id)}
          style={{ marginLeft: "1rem" }}
        >
          erledigt
        </button>
      </div>
    ))
  );
};

export default TodoList;
