import PropTypes from "prop-types";

const Button = ({ textBtn, color, onAddTask, showCLoseEvent }) => {
  return (
    <button
      className="btn"
      onClick={onAddTask}
      style={{ backgroundColor: color }}
    >
      {showCLoseEvent ? 'Close' : textBtn}
    </button>
  );
};

Button.defaultProps = {
  textBtn: 'Add Task'
}

Button.prototype = {
  color: PropTypes.string,
  textBtn: PropTypes.string,
  onAddTask: PropTypes.func.isRequired,
};

export default Button;
