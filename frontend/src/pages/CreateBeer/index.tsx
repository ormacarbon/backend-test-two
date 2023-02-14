import { Beer } from '@/components/BeerList'
import Header from '@/components/Header'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import styles from './styles.module.scss'

export default function CreateBeer() {
  const { register, handleSubmit, reset } = useForm()
  const [isLoaded, setIsLoaded] = useState(false)

  async function handleCreateBeer(data:any) {
    const latitude = Number(data.lat)
    const longitude = Number(data.long)
    const coordinates = [latitude, longitude]

    // formatted dat

    const beer = {
      name: data.name,
      city: data.city,
      state: data.state,
      country: data.country,
      abv: Number(data.abv),
      ibu: Number(data.ibu),
      address: data.address,
      website: data.website,
      category: data.category,
      description: data.description,
      coordinates: coordinates
    }

    setIsLoaded(!isLoaded)
    try {
      const res = await api.post('beer', beer)

      setIsLoaded(!!isLoaded)
      if(res.status === 200) {
        toast.success('Successfully registered car')
        reset()
      } else if (res.status===500){
        toast.error('Server Error')
      }
    }catch(err) {
      toast.error(`${err}`);
      
      setIsLoaded(!!isLoaded)
    }
  }

  return (
    <div className={styles.createCarContainer}>
      <Header/>

      <div className={styles.createCar}>
        

        <form className={styles.form} onSubmit={handleSubmit(handleCreateBeer)}>
          <h2 className={styles.createCarTitle}> Create Beer</h2>
          <label htmlFor="name">Name</label>
            <input 
              {...register('name')}
              id="name" 
              type="text"
              autoComplete="name" 
              required
              className={styles.inputName}
            />
            <label htmlFor="city">City</label>
            <input 
              {...register('city')}
              id="city" 
              type="text" 
              autoComplete="email" 
              required
              className={styles.inputBrand}
            />
            <label htmlFor="state">State</label>
            <input 
              {...register('state')}
              id="state" 
              type="text" 
              autoComplete="state" 
              required
              className={styles.inputYear}
            />

            <label htmlFor="year">Country</label>
            <input 
              {...register('country')}
              id="country" 
              type="text" 
              autoComplete="country" 
              required
              className={styles.inputYear}
            />

            <label htmlFor="address">Address</label>
            <input 
              {...register('address')}
              id="address" 
              type="text" 
              autoComplete="address" 
              required
              className={styles.inputYear}
            />


            <label htmlFor="decription">Descrição</label>
            <textarea 
              {...register('description')}
              id="description" 
              autoComplete="descripton"
              maxLength={300}
              className={styles.inputDescription}
            />

            <label htmlFor="abv">Abv</label>
            <input
              {...register('abv')}
              id="abv" 
              type="number"
              autoComplete="abv" 
              required
              className={styles.inputOnwerName}
            />

            <label htmlFor="category">Category</label>
            <input
            {...register('category')}
              id="category" 
              type="category" 
              autoComplete="category" 
              className={styles.email}
            />

            <label htmlFor="ibu">Ibu</label>
            <input
              {...register('ibu')}
              id="ibu" 
              type="number" 
              autoComplete="ibu" 
              required
              className={styles.inputTel}
            />

            <label htmlFor="website">Website</label>
            <input
              {...register('website')}
              id="website" 
              type="text" 
              autoComplete="website" 
              required
              className={styles.inputTel}
            />

            <label htmlFor="lat">Lat</label>
            <input
              {...register('lat')}
              id="lat" 
              type="number" 
              autoComplete="lat" 
              required
              className={styles.inputTel}
            />

            <label htmlFor="long">Long</label>
            <input
              {...register('long')}
              id="long" 
              type="number" 
              autoComplete="long" 
              required
              className={styles.inputTel}
            />
          {
          !isLoaded ? <button type="submit">Cadastrar</button> : <div className={styles.progress}><CircularProgress color='primary'/></div>
          }
        </form>
      </div>
    </div>
  )
}