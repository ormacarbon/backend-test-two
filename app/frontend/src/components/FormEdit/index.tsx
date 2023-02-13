import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { apiupdateBeers } from '../../utils/Apis';
import { IFormEdit } from '../../interfaces/IFormEdit';

function FormEdit(object : IFormEdit) {
   const { _id,
    abv,
    address,
    category,
    city,
    coordinates,
    country,
    description,
    ibu,
    state,
    setEditBeers,
    name,
    website } = object
  const [newabv, setNewAbv] = useState(abv);
  const [newaddress, setNewAddress] = useState(address);
  const [newcategory, setNewCategory] = useState(category);
  const [newcity, setNewCity] = useState(city);
  const [newcoordinates, setNewCoordinates] = useState(coordinates);
  const [newcountry, setNewCountry] = useState(country);
  const [newdescription, setNewDescription] = useState(description);
  const [newibu, setNewIbu] = useState(ibu);
  const [newstate, setNewState] = useState(state);
  const [newname, setNewName] = useState(name);
  const [newwebsite, setNewWebsite] = useState(website);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const TIME_ERROR = 3000;
  const TIME_SUCCESS = 3000;

  async function handleSubmitUpdate() {
    const objBeer = {
      abv: newabv,
      address: newaddress,
      category: newcategory,
      city: newcity,
      coordinates: newcoordinates,
      country: newcountry,
      description : newdescription,
      ibu : newibu,
      state : newstate,
      name : newname,
      website : newwebsite
    }
    const api  = await apiupdateBeers(_id, objBeer);
    if (api.response) {
      setError(true);
      setTimeout(() => { setError(false); }, TIME_ERROR);
    }
    if (!api.response) {
      setSuccess(true);
      setTimeout(() => { setSuccess(false); }, TIME_SUCCESS);
    }
    setEditBeers(false);
    window.location.reload();
  }

  async function handleSubmitCancel() {
    setEditBeers(false);
  }

  return (
    <div>
        <p>ABV: </p>
      <Input
        type="abv"
        placeholder="Abv"
        value={ String(newabv) }
        onChange={ (event) => setNewAbv(Number(event.target.value)) }
      />
      <p>Endereço: </p>
      <Input
        type="address"
        placeholder="Endereço da cerveja"
        value={ newaddress }
        onChange={ (event) => setNewAddress(event.target.value) }
      />
      <p>Categoria: </p>
      <Input
        type="category"
        placeholder="Categoria da cerveja"
        value={ newcategory }
        onChange={ (event) => setNewCategory(event.target.value) }
      />
       <p>Cidade: </p>
      <Input
        type="city"
        placeholder="Cidade da cerveja"
        value={ newcity }
        onChange={ (event) => setNewCity(event.target.value) }
      />
      <p>Coodernadas: </p>
      <Input
        type="coordinates"
        placeholder="Coodernadas da cerveja"
        value={ String(newcoordinates) }
        onChange={ (event) => setNewCoordinates([Number((event.target.value))]) }
      />
       <p>País: </p>
      <Input
        type="country"
        placeholder="País da cerveja"
        value={ newcountry }
        onChange={ (event) => setNewCountry(event.target.value) }
      />
      <p>Descrição: </p>
      <Input
        type="description"
        placeholder="Descrição da cerveja"
        value={ newdescription }
        onChange={ (event) => setNewDescription(event.target.value) }
      />
      <p>Taxa de Ibu: </p>
      <Input
        type="ibu"
        placeholder="Ibu"
        value={ String(newibu) }
        onChange={ (event) => setNewIbu(Number(event.target.value)) }
      />
      <p>Estado: </p>
      <Input
        type="state"
        placeholder="Estado da cerveja"
        value={ newstate }
        onChange={ (event) => setNewState(event.target.value) }
      />
       <p>Nome da Cerveja: </p>
      <Input
        type="name"
        placeholder="Nome da cerveja"
        value={ newname }
        onChange={ (event) => setNewName(event.target.value) }
      />
      <p>Site: </p>
      <Input
        type="website"
        placeholder="Site"
        value={ newwebsite }
        onChange={ (event) => setNewWebsite(event.target.value) }
      />
      <div className="btn">
        <Button
          name="Salvar"
          onClick={ () => handleSubmitUpdate() }
        />
      </div>
      <div className="btn">
        <Button
          name="Cancelar"
          onClick={ () => handleSubmitCancel() }
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

export default FormEdit;