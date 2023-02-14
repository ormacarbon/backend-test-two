import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import styles from './styles.module.scss'

export type Beer = {
  id: string
  abv: number
  address: string
	category?: string
	city: string
	coordinates: number[]
	country: string
	description?: string
	ibu: number
	name: string
	state: string
	website: string
  created_at: Date
}

export type BeerListProps = {
  beers: Array<Beer>
}

export default function BeerList({ beers }: BeerListProps) {

  return (
    <div className={styles.carListContainer}>
      <div className={styles.list}>
      <table className={styles.cartTable} cellSpacing={0}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Abv</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>País</th>
              </tr>
            </thead>
            
            <tbody className={styles.tbody}>
  
            {beers?.map((beer, index) => {
              return (
                <tr key={beer.id}>
                  <td className={styles.name}> 
                    <span>Nome</span>
                    <div>{beer.name}</div>
                  </td>
                  <td className={styles.description}>
                    <span>Abv</span>
                    <div className={styles.descriptionContent}>{beer.abv}</div>
                  </td>
                  <td className={styles.brand}>
                    <span>Cidade</span>
                    <div> {beer.city} </div>
                  </td>
                  <td className={styles.manufactureYear}>
                    <span>Estado</span>
                    <div>{beer.state}</div>
                  </td>
                  <td className={styles.owner}>
                    <span>País</span>
                    <div>{beer.country}</div>
                  </td>
                </tr>
              )
            })}
            </tbody>           
          </table>
      </div>
    </div>
  )
}