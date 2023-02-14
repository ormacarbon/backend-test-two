import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void,
    hidden?: boolean,
    style?: string;
}

function Button(object: IButtonProps) {
  const { onClick, name, hidden, style, } = object;
  return (
    <div>
      <button className={style} hidden={hidden} type="submit" onClick={ onClick }>{name}</button>
    </div>
  );
}

export default Button;
