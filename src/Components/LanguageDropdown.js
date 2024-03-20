import React from "react";
import './dropdown.css'; // Import the CSS file

const LanguageDropdown = ({ label, languages, onChange }) => (
  <div className="dropdown-container">
    <label className="dropdown-label" htmlFor={label}>{label}</label>
    <select className="dropdown-select" id={label} onChange={(e) => onChange(e.target.value)}>
      {Object.entries(languages).map(([languageName, languageCode]) => (
        <option key={languageCode} value={languageCode}>
          {languageName}
        </option>
      ))}
    </select>
  </div>
);

export default LanguageDropdown;
