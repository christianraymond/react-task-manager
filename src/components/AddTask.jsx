import { useState } from "react";

const AddTask = ({onAddTask}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(!text) {
      alert('Please add Task!')
    }

    onAddTask({ text, day, reminder})

    setText('');
    setDay('');
    setReminder('')
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day & time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox"  value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
