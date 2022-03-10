import PropTypes from "prop-types";

const Button = ({ textBtn, color, handleClick }) => {
  return (
    <button
      className="btn"
      onClick={handleClick}
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
  handleClick: PropTypes.func.isRequired,
};

export default Button;
