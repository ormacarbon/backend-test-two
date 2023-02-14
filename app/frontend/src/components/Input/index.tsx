import React from 'react';
import style from './input.module.scss';

interface InputsProps {
    value?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    onChange?: React.Dispatch<React.ChangeEvent<HTMLInputElement>>
}

function Input(object: InputsProps) {
  const { value, type, placeholder, onChange, name } = object;
  return (
    <div>
      <input
        type={ type }
        className={style.fieldclass}
        value={ value }
        name={ name }
        placeholder={ placeholder }
        autoComplete="on"
        onChange={ onChange }
      />
    </div>
  );
}

export default Input;
