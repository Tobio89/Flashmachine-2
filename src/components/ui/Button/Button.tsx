import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  variant?: "red";
  className?: string;
}

function Button({ children, className, variant, ...props }: Props) {
  return (
    <button
      className={classNames(
        styles.Button,
        !!variant ? styles[variant] : styles.green,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
