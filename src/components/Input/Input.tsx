import React from "react";

import "./styles.css";

function Input({
  type,
  id,
  placeholder,
  value,
  handleChange,
  label,
}: {
  type: string;
  id: string;
  value: string;
  placeholder: string;
  handleChange: (e: any) => void;
  label: string;
}) {
  return (
    <>
      <div className="field">
        <input
          className="input-field"
          type={type}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </>
  );
}

export default Input;
