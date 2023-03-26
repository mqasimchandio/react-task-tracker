import React from "react";
import Task from "./Task";

function Tasks({ tasks, onDeleteTask, onToggle }) {
  return (
    <>
      {tasks.map((tasks) => (
        <Task
          onDeleteTask={onDeleteTask}
          key={tasks.id}
          task={tasks}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
