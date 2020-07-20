import React from "react"
// import './button.css';

const Button = ({ label }) => {
  return (
    <div data-testId="button" className="button-style">
      {label}
    </div>
  );
};

export default Button;
