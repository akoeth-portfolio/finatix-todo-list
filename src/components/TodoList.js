import React from "react";

const TodoList = ({ todos, markAsCompleted }) => {
  return todos.map((todo) =>
    !todo.completed ? (
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
          onClick={() => markAsCompleted(todo.id)}
          style={{ marginLeft: "1rem" }}
        >
          erledigt
        </button>
      </div>
    ) : null
  );
};

export default TodoList;
