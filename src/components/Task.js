import React from "react";
import { FaTimes } from "react-icons/fa";

function Task({ task, onDeleteTask, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""} `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDeleteTask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <h5>{task.day}</h5>
    </div>
  );
}

export default Task;
