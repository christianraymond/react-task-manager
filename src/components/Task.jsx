import { FaTimes } from "react-icons/fa";

const Task = ({ task, handleDeleteTask, handleToggleReminder }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => handleToggleReminder(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={faTimeStyle}
          onClick={() => handleDeleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

const faTimeStyle = {
  color: "red",
  cursor: "pointer",
};

export default Task;
