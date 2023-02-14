import { Beer } from '@/components/BeerList'
import { CircularProgress } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { api } from '../../../../services/api'
import Header from '../../../components/Header'
import styles from './styles.module.scss'

export type BeerEditProps = {
  slug: string
  beer: Beer
}

export default function BeerEdit({slug, beer} : BeerEditProps){
  const { register, handleSubmit, reset, setValue} = useForm()
  const [isLoaded, setIsLoaded] = useState(false)
  const [name, setName] = useState(beer.name)
  const [abv, setAbv] = useState(beer.abv)
  const [description, setDescription] = useState(beer.description)
  const [ibu, setIbu] = useState(beer.ibu)
  const [city, setCity] = useState(beer.city)
  const [state, setState] = useState(beer.state)
  const [country, setCountry] = useState(beer.country)
  const [category, setCategory] = useState(beer.category)
  const [address, setAddres] = useState(beer.address)
  const [website, setWebsite] = useState(beer.website)
  const [lat, setLat] = useState(beer.coordinates[0]);
  const [long, setLong] = useState(beer.coordinates[1]);

  async function handleUpdateBeer(data:any) {

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
      category: data?.category,
      description: data?.description,
      coordinates: coordinates
    }

    setIsLoaded(!isLoaded)
    try {
      const res = await api.patch(`beer/${slug}`, data)

      setIsLoaded(!!isLoaded)
      if(res.status === 204) {
        toast.success('Successfully updated beer')
        reset()
      } else if (res.status===500){
        toast.error('Server error')
      }
    }catch(err) {
      toast.error(`${err}`);
      
      setIsLoaded(!!isLoaded)
    }
  }

  return (
    <div className={styles.carEditContainer}>
      <Header/>

      <div className={styles.editCar}>
        <form className={styles.form} onSubmit={handleSubmit(handleUpdateBeer)}>
            <h2>Edit Beer</h2>
            <label htmlFor="name">Name</label>
            <input 
              {...register('name')}
              id="name" 
              type="text"
              autoComplete="name" 
              required
              value={name} 
              onChange={e => setName(e.target.value)} 
              className={styles.inputName}
            />
            <label htmlFor="city">City</label>
            <input 
              {...register('city')}
              id="city" 
              type="text" 
              autoComplete="email" 
              required
              value={city} 
              onChange={e => setCity(e.target.value)} 
              className={styles.inputBrand}
            />
            <label htmlFor="state">State</label>
            <input 
              {...register('state')}
              id="state" 
              type="text" 
              autoComplete="state" 
              required
              value={state} 
              onChange={e => setState(e.target.value)} 
              className={styles.inputYear}
            />

            <label htmlFor="country">Country</label>
            <input 
              {...register('country')}
              id="country" 
              type="text" 
              autoComplete="country" 
              required
              value={country} 
              onChange={e => setCountry(e.target.value)} 
              className={styles.inputYear}
            />

            <label htmlFor="address">Address</label>
            <input 
              {...register('address')}
              id="address" 
              type="text" 
              autoComplete="address" 
              required
              value={address} 
              onChange={e => setAddres(e.target.value)} 
              className={styles.inputYear}
            />


            <label htmlFor="decription">Descrição</label>
            <textarea 
              {...register('description')}
              id="description" 
              autoComplete="descripton"
              maxLength={300}
              value={description}
              onChange={e => setDescription(e.target.value)} 
              className={styles.inputDescription}
            />

            <h2> Dados do proprietário </h2>

            <label htmlFor="abv">Abv</label>
            <input
              {...register('abv')}
              id="abv" 
              type="number"
              autoComplete="abv" 
              required
              value={abv} 
              onChange={e => setAbv(Number(e.target.value))} 
              className={styles.inputOnwerName}
            />

            <label htmlFor="category">Category</label>
            <input
            {...register('category')}
              id="category" 
              type="number" 
              autoComplete="category" 
              value={category}
              onChange={e => setCategory(e.target.value)} 
              className={styles.email}
            />

            <label htmlFor="ibu">Ibu</label>
            <input
              {...register('ibu')}
              id="ibu" 
              type="number" 
              autoComplete="ibu" 
              required
              value={ibu} 
              onChange={e => setIbu(Number(e.target.value))} 
              className={styles.inputTel}
            />

            <label htmlFor="website">Website</label>
            <input
              {...register('website')}
              id="website" 
              type="text" 
              autoComplete="website" 
              required
              value={website} 
              onChange={e => setWebsite(e.target.value)} 
              className={styles.inputTel}
            />

            <label htmlFor="lat">Lat</label>
            <input
              {...register('lat')}
              id="lat" 
              type="number" 
              autoComplete="lat" 
              required
              value={lat} 
              onChange={e => setLat(Number(e.target.value))} 
              className={styles.inputTel}
            />

            <label htmlFor="long">Long</label>
            <input
              {...register('long')}
              id="long" 
              type="number" 
              autoComplete="long" 
              required
              value={long} 
              onChange={e => setLong(Number(e.target.value))} 
              className={styles.inputTel}
            />
            {
            !isLoaded ? <button type="submit">Editar</button> : <div className={styles.progress}><CircularProgress color='primary'/></div>
            }
        </form>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}: Params) => {
  const { slug } = params

  const beerData = await api.get(`beer/${slug}`)
  const beer = beerData.data 

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    props: {
      beer,
      slug
    }
  }
}
