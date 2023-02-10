import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>(({children, ...rest}, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  )
})