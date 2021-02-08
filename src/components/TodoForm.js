import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    note: "",
    completed: false,
  });

  const { title, note } = todo;

  const onChange = (e) => setTodo({ ...todo, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...todo, id: uuid() });
    setTodo({ title: "", note: "" });
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        name="title"
        type="text"
        value={title}
        onChange={(e) => onChange(e)}
      />
      <input
        name="note"
        type="text"
        value={note}
        onChange={(e) => onChange(e)}
      />
      <button>Todo hinzufügen</button>
    </form>
  );
};

export default TodoForm;
