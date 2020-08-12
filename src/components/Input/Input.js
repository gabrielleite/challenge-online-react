import React from "react";

import "./input.scss";

const Input = ({ label, value, name, type, onChange }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor="">
        {label}
      </label>
      <input name={ name } type={ type } value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
