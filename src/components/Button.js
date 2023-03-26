import PropTypes from "prop-types";

import React from "react";

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Add",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
