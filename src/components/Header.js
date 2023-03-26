import PropTypes from "prop-types";
import Button from "./Button";

import React from "react";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
};
export default Header;
