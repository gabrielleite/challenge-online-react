import React from "react";

import "./input.scss";

const Input = ({ label, value, name, type, onChange, error=false }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor="">
        {label}
      </label>
      <input name={name} type={type} value={value} onChange={onChange} />
      {error && <p className="input-error">field required</p>}
    </div>
  );
};

export default Input;
