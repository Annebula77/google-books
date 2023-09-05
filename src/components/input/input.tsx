import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import styles from "./input.module.css";

export interface InputProps {
  placeholder: string;
  onSearch: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, onSearch }) => {

  const [value, setValue] = useState<string>("");

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.input__container}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        className={styles.search__button}
        onClick={() => onSearch(value)}
      >
        🔍
      </button>
    </div>
  );
};
