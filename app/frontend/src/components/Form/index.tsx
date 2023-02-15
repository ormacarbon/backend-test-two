import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { apiCreateBeer } from '../../utils/Apis';
import style from './form.module.scss';

function Form() {

  const [abv, setAbv] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [ibu, setIbu] = useState('');
  const [state, setState] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const TIME_ERROR = 3000;
  const TIME_SUCCESS = 3000;

  async function handleSubmitUpdate() {
    const objBeer = {
      abv,
      address,
      category,
      city,
      coordinates,
      country,
      description,
      ibu,
      state,
      name,
      website
    }
    const api  = await apiCreateBeer(objBeer);
    if (api.response) {
      setError(true);
      setTimeout(() => { setError(false); }, TIME_ERROR);
    }
    if (!api.response) {
      setSuccess(true);
      setTimeout(() => { setSuccess(false); }, TIME_SUCCESS);
      window.location.reload();
    }
  }

  return (
    <div className={style.formclass}>
      <div className={style.divclass}>
      <p>ABV: </p>
      <Input
        type="abv"
        placeholder="Abv"
        value={ abv }
        onChange={ (event) => setAbv(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
      <p>Endereço: </p>
      <Input
        type="address"
        placeholder="Endereço da cerveja"
        value={ address }
        onChange={ (event) => setAddress(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
       <p>Categoria: </p>
      <Input
        type="category"
        placeholder="Categoria da cerveja"
        value={ category }
        onChange={ (event) => setCategory(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
      <p>Cidade: </p>
      <Input
        type="city"
        placeholder="Cidade da cerveja"
        value={ city }
        onChange={ (event) => setCity(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
      <p>Coodernadas: </p>
      <Input
        type="coordinates"
        placeholder="Coodernadas da cerveja"
        value={ coordinates }
        onChange={ (event) => setCoordinates(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
       <p>País: </p>
      <Input
        type="country"
        placeholder="País da cerveja"
        value={ country }
        onChange={ (event) => setCountry(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
       <p>Descrição: </p>
      <Input
        type="description"
        placeholder="Descrição da cerveja"
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
       <p>Taxa de Ibu: </p>
      <Input
        type="ibu"
        placeholder="Ibu"
        value={ ibu }
        onChange={ (event) => setIbu(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
      <p>Estado: </p>
      <Input
        type="state"
        placeholder="Estado da cerveja"
        value={ state }
        onChange={ (event) => setState(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
      <p>Nome da Cerveja: </p>
      <Input
        type="name"
        placeholder="Nome da cerveja"
        value={ name }
        onChange={ (event) => setName(event.target.value) }
      />
      </div>
      <div className={style.divclass}>
       <p>Site: </p>
      <Input
        type="website"
        placeholder="Site"
        value={ website }
        onChange={ (event) => setWebsite(event.target.value) }
      />
      </div>
      <div className={style.divbuttom}>
        <Button
          style = {style.button}
          name="Cadastrar"
          onClick={ () => handleSubmitUpdate() }
        />
      </div>
      {error && (
          <div className="error-message">
            <p>
              Não foi possivel cadastrar a cerveja.
            </p>
          </div>
        )}
      {success && (
          <div>
            <p>
              Cerveja cadastrada com sucesso.
            </p>
          </div>
        )}
    </div>
  );
}

export default Form;