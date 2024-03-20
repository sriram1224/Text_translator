import React from "react";
import './textInput.css'; // Import the CSS file

const TextInput = ({ label, value, onChange }) => (
  <div className="text-input-container">
    <label className="text-input-label" htmlFor={label}>{label}</label>
    <textarea
      className="text-input"
      id={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  </div>
);

export default TextInput;
