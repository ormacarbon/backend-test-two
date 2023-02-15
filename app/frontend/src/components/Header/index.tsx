import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './header.module.scss';

function Header() {
  const navigate = useNavigate();

  function handleSubmithome() {
    navigate('/');
  }

  function handleSubmitStock() {
    navigate('/beers');
  }

  return (
    <div>
      <header className={style.header}>
        <button
          type="button"
          className={style.buttom}
          onClick={handleSubmithome}
        >
          Home
        </button>
        <button
          className={style.buttom}
          type="button"
          onClick={handleSubmitStock}
        >
          Estoque
        </button>
      </header>
    </div>
  );
}

export default Header;
