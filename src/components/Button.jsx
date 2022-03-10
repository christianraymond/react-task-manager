import PropTypes from "prop-types";

const Button = ({ textBtn, color, onAddTask }) => {
  return (
    <button
      className="btn"
      onClick={onAddTask}
      style={{ backgroundColor: color }}
    >
      {textBtn}
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
