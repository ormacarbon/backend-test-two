import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import * as S from "./styles";

export const Button = forwardRef<HTMLButtonElement, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>(({children, ...rest}, ref) => {
  return (
    <S.Button
      {...rest}
      ref={ref}
    >
      {children}
    </S.Button>
  )
})