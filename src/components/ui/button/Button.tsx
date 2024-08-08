import React from 'react'
import styles from "./button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
  
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { ...restProps } = props;
  return (
    <button ref={ref} className={styles['button']} {...restProps}>Button</button>
  )
})

Button.displayName = 'Button'

export default Button