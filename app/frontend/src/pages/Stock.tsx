import React, { useCallback, useEffect, useState } from 'react';
import Beers from '../components/Beers';
import Header from '../components/Header';
import { apiBeers } from '../utils/Apis';
import style from './stock.module.scss';

function Stock() {
  const [beers, setBeers] = useState('');

  const ApiTaks = useCallback(async () => {
    const BeersData = await apiBeers();
    setBeers(BeersData.length);
  }, []);

  useEffect(() => {
    ApiTaks()
  }, []);

  return (
    <div>
      <Header />
      <p className={style.fieldclass}>Numero de Cervejas Cadastradas: {beers}</p>
      <br/>
      <Beers />
    </div>
  );
}

export default Stock;
