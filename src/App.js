import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 02:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 01:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 03:30pm",
      reminder: false,
    },
  ]);

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delete task
  const onDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(tasks.reminder);
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <h3>No Tasks Scheduled</h3>
      )}
    </div>
  );
}

export default App;
