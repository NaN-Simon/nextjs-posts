'use client';


import styles from "./label.module.scss";

import React, { LabelHTMLAttributes } from "react";

type CustomLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
};

const Label = React.forwardRef<HTMLLabelElement, CustomLabelProps>((props, ref) => {
  const { htmlFor, ...restProps } = props;
  return (
    <label
      htmlFor={htmlFor}
      ref={ref}
      className={styles['input']}
      {...restProps}
    />
  )
})

Label.displayName = 'Label'

export default Label;
