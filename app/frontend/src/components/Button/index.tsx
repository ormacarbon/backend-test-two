import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void,
    hidden?: boolean,
}

function Button(object: IButtonProps) {
  const { onClick, name, hidden } = object;
  return (
    <div>
      <button hidden={hidden} type="submit" onClick={ onClick }>{name}</button>
    </div>
  );
}

export default Button;
