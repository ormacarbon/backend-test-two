import React, {
    useEffect, useCallback, useState,
  } from 'react';
  import { apiBeersQuerys } from '../../utils/Apis';
  import { IBeers } from '../../interfaces/IBeers';
  import Button from '../Button';
  import usePaginations from '../../hooks/usePagination';
  
  function Beers() {
    const [beers, setBeers] = useState<IBeers[]>([]);
    const { setActualPage, actualPage } = usePaginations();

    const ApiRandom = useCallback(async (page: number) => {
      const apiRandom = await apiBeersQuerys(page);
      setBeers(apiRandom);
    }, []);
  
    async function handleSubmitDelete(id: string) {
      
      console.log('ola')
    }
  
    async function handleSubmitUpdate(id: string) {
      console.log('ola')
    }
  
    useEffect(() => {
      ApiRandom(actualPage)
    }, [actualPage]);
  
    return (
      <div>
        {beers.length >= 1 && beers.map((e, index) => (
          <div key={ e._id }>
            <p>{e.name}</p>
            <div className="btn">
              <Button
                name="Deletar"
                onClick={ () => handleSubmitDelete(e.name) }
              />
            </div>
            <div className="btn">
              <Button
                name="Editar"
                onClick={ () => handleSubmitUpdate(e.name) }
              />
            </div>
          </div>
        ))}
          <div>
        {Array(40).fill('').map((_e, index) => (
          <button
            onClick={() => setActualPage(index + 1)}
            type="button"
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    );
  }
  
  export default Beers;
  