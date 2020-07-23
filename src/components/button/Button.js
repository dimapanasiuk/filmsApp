import React from "react";
import './button.css';

const Button = ({title}) => {
  return (
    <div className="button-style">
      {title}
    </div>
  );
};

export default Button;

