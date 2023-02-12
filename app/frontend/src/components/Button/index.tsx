import React from 'react';

interface IButtonProps {
    name: string;
    onClick?: () => void,
}

function Button(object: IButtonProps) {
  const { onClick, name } = object;
  return (
    <div>
      <button type="submit" onClick={ onClick }>{name}</button>
    </div>
  );
}

export default Button;
