import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;