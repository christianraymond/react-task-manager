import Task from './Task';

const Tasks = ({tasksList,  onDeleteTask, onToggleReminder}) => {
  return (
    <>
    {tasksList.map(task => (
      <Task key={task.id} task={task} handleDeleteTask={onDeleteTask} handleToggleReminder={onToggleReminder}/>
    ))}
    </>
  )
}

export default Tasks