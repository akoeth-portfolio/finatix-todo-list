import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    note: "",
  });

  const { title, note } = todo;

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ title: "", note: "" });
    }
  };

  return (
    <div style={{ width: "15%" }}>
      <form onSubmit={(e) => onSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label for="title">Titel</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "1rem",
          }}
        >
          <label for="note">Anmerkung</label>
          <input
            name="note"
            type="text"
            value={note}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
          }}
        >
          <button>Todo hinzufügen</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
