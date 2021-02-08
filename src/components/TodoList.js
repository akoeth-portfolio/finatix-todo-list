import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <div
          style={{
            display: "flex",
            width: "15%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{todo.title}</div>
          <div>{todo.note}</div>
          <button onClick={() => removeTodo(todo.id)}>erledigt</button>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
