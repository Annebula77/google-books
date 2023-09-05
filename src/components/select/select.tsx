import React, { ChangeEvent } from 'react';
import styles from './select.module.css'

export interface SelectProps {
  options: { label: string, value: string }[];
  onChange: (value: string) => void;
  value: string;
}

export const Select: React.FC<SelectProps> = ({ options, onChange, value }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select onChange={handleChange} value={value} className={styles.select}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};