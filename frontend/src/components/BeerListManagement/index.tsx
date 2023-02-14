import styles from './styles.module.scss'
import { 
  Dialog, 
  DialogActions,
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Button
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { toast } from 'react-toastify';
import Router from 'next/router';
import { Beer } from '../BeerList';

export type BeerListManagementProps = {
  beers: Array<Beer>
}

export default function BeerListManagement ({beers}: BeerListManagementProps) {
  const [open, setOpen] = useState(false);
  const [beersList, setBeersList] = useState(beers);


  async function handleDelete(id: string) {
    try {
      const res = await api.delete(`beer/${id}`)

      if(res.status === 204) {
        setBeersList(beers.filter(beer => beer.id !== id));
        toast.success('successfully deleted beer!')
      } else if (res.status===500){
        toast.error('Server Error!')
      }
    }catch (err) {
      toast.error(`${err}`);
    }
  }

 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (id: string) => {
    Router.push(`/BeerManagement/BeerEdit/${id}`);;
  }

  return (
    <div className={styles.carListManagementContainer}>
      <div className={styles.managementCars}>
        <h2 className={styles.managementTitle}> Beer Management</h2>
      </div>
      {beersList?.map(beer => (
      <div key={beer.id} className={styles.actionsCarList}>
        <div className={styles.carToggle}>
          <div className={styles.carData}>
            <div>
              {beer.name}  
            </div>

            <div>
              {beer.city}  
            </div>

            <div>
              {beer.state}  
            </div>

            <div>
              {beer.country}  
            </div>
          </div>

          <div className={styles.actionsButton}>
            <button onClick={() => handleEdit(beer.id)}>Editar</button>
            <button onClick={handleClickOpen}>Delete</button>
          </div>
        </div>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Delete car</DialogTitle>
          <DialogContent>
              <DialogContentText>
                Are you sure you want to delete?
              </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => {
                  handleDelete(beer.id);
                  handleClose();
              }} color="secondary">
                  Deletar
              </Button>
          </DialogActions>
        </Dialog>
      </div>
      ))}

    </div>
  )
}