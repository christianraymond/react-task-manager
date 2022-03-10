import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "March 12th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "May 22th at 15:33pm",
      reminder: false,
    },
  ]);

  //Add Task

  const addTask = (task) => {
    console.log(task);
  }

  //Delete Task Func
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    alert("Are you sure you want to delete task ID " + id + " ?");
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

    console.log("Task id ", id + " toggled");
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={addTask}/>
      {tasks.length > 0 ? (
        <Tasks
          tasksList={tasks}
          onDeleteTask={deleteTask}
          onToggleReminder={toggleReminder}
        />
      ) : (
        "No Task Available"
      )}
    </div>
  );
};

export default App;
