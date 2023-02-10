import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(({...rest}, ref) => {
  return (
    <input
      {...rest}
      ref={ref}
    />
  )
})