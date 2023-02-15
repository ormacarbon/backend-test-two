import React from 'react';
import { IButtons } from '../../interfaces/IButtons';
import Button from '../Button';
import style from './buttoms.module.scss';
  
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
      <div className={style.divButton}>
          <Button
            onClick={() => setprevpage()}
            style={style.next}
            name="Anterior"
          />
          <Button
            style={style.next}
            onClick={() => buttomPage(1)}
            name='1'
          />
          {actualPage > 5 &&
          <Button
            style={style.next}
            name='...'
            />
          }
        {actualPage < 5 && Array(4).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            style={style.next}
            onClick={() => buttomPage(index + 2)}
            name={String(index +2)}
          />
          </div>
        ))}
        {actualPage >= 5  && actualPage <= 37 && Array(3).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            style={style.next}
            onClick={() => buttomPage(actualPage + index)}
            name={String(actualPage + index)}
          />
          </div>
        ))}
        {actualPage > 37 && actualPage < 40 && Array(2).fill('').map((_e, index) => (
          <div key={index}>
          <Button
            style={style.next}
            onClick={() => buttomPage(actualPage + index)}
            hidden={actualPage ==39 ? true : false}
            name={String(actualPage + index)}
          />
          </div>
        ))}
        <Button
            style={style.next}
            name='...'
          />
          <Button
            onClick={() => buttomPage(40)}
            style={style.next}
            name='40'

            />
         <Button
            style={style.next}
            onClick={() => setproxpage()}
            name='Próximo'
            />
      </div>
    );
  }
  
  export default Buttons;
  