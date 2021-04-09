import React from 'react';
import styles from './Button.module.scss'
import cn from "classnames";



const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

export const Button = ({children, disabled, color, onClick, className}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(className, styles.button, colors[color])}
      disabled={disabled}>
      {children}
    </button>
  );
};


export default Button;
