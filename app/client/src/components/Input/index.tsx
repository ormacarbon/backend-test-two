import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";
import * as S from "./styles";

export const Input = forwardRef<HTMLInputElement, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>(({...rest}, ref) => {
  return (
    <S.Input
      {...rest}
      ref={ref}
    />
  )
})