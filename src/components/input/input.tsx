import React, { KeyboardEvent, ChangeEvent } from "react";
import styles from "./input.module.css";

export interface InputProps {
  placeholder: string;
  onSubmit?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange: (value: string) => void;
  value: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, onSubmit, onChange, value }) => {

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onSubmit && value.trim() !== "") {
      onSubmit(event);
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
      {onSubmit && (
        <button
          className={styles.search__button}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (onSubmit && value.trim() !== "") {
              e.preventDefault();
              onSubmit(e as any);
            }
          }}
        >
          🔍
        </button>
      )}

    </div>
  );
};
