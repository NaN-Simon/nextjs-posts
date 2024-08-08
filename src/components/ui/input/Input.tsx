import React from 'react'
import styles from "./input.module.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

  const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { type, ...restProps } = props;
    return (
      <input
        type={type}
        ref={ref}
        className={styles['input']}
        {...restProps}
      />
    )
  })

  Input.displayName = 'Input'

export default Input