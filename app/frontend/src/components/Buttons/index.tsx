import React from 'react';
  import { IButtons } from '../../interfaces/IButtons';
  import Button from '../Button';
  
  function Buttons(object: IButtons) {
    const { actualPage, setActualPage } = object;


    async function setproxpage() {
      if(actualPage <= 40) {
      await setActualPage(actualPage + 1)
      window.location.reload();
      }
    }

    async function setprevpage() {
      await setActualPage(actualPage - 1)
      window.location.reload();
    }

    async function buttomPage(index: number) {
      await setActualPage(index)
      window.location.reload();
    }

 
    return (
      <div>
          <div>
          <Button
            onClick={() => setprevpage()}
            name="Anterior"
          />
          <Button
            onClick={() => buttomPage(1)}
            name='1'
          />
          {actualPage > 5 &&
          <Button
            name='...'
            />
          }
        {actualPage < 5 && Array(4).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            onClick={() => buttomPage(index + 2)}
            name={String(index +2)}
          />
          </div>
        ))}
        {actualPage >= 5  && actualPage <= 37 && Array(3).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            onClick={() => buttomPage(actualPage + index)}
            name={String(actualPage + index)}
          />
          </div>
        ))}
        {actualPage > 37 && actualPage < 40 && Array(2).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            onClick={() => buttomPage(actualPage + index)}
            hidden={actualPage ==39 ? true : false}
            name={String(actualPage + index)}
          />
          </div>
        ))}
        <Button
            name='...'
          />
          <Button
            onClick={() => buttomPage(40)}
            name='40'

            />
         <Button
            onClick={() => setproxpage()}
            name='Próximo'
            />
      </div>
      </div>
    );
  }
  
  export default Buttons;
  