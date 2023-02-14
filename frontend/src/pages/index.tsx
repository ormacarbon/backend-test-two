import BeerList, { BeerListProps } from '@/components/BeerList'
import { GetServerSideProps } from 'next'
import { api } from '../../services/api'
import Header from '../components/Header'
import styles from './styles.module.scss'

export default function Landing({ beers }: BeerListProps) {

  return (
    <div className={styles.landingContainer}>
      <Header/>
      <div className={styles.carList}>
        <h2 className={styles.listTitle}>
          Beer List
        </h2>

        {beers ? <BeerList beers={beers}/> : <h2>There are no beers registered yet.</h2>}
        
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const beersData = await api.get('beers')
  

  const beers = beersData.data

  return {
    props: {
      beers
    }
  }
}

