import styles from './button.module.css';
import React, { FC } from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  onSubmit?: () => void;
  extraClass?: string;
}

export const Button: FC<ButtonProps> = ({ text, onClick, onSubmit, extraClass }) => {
  return (
    <button
      className={`${styles.button} ${extraClass}`}
      type="submit"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
        if (onSubmit) {
          e.preventDefault();
          onSubmit();
        }
      }}
    >
      {text}
    </button>
  );
};

