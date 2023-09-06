import React, { KeyboardEvent, ChangeEvent } from "react";
import styles from "./input.module.css";

export interface InputProps {
  placeholder: string;
  onSearch: (value: string) => void;
  onChange: (value: string) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, onSearch, onChange, value }) => {

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
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

      {onSearch && (
        <button
          className={styles.search__button}
          onClick={() => onSearch(value)}
        >
          🔍
        </button>
      )}
    </div>
  );
};
