import BeerListManagement, { BeerListManagementProps } from '@/components/BeerListManagement'
import Header from '@/components/Header'
import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import styles from './styles.module.scss'

export default function BeerManagement({beers}: BeerListManagementProps) {
  return (
    <div className={styles.BeerManagementContainer}>
      <Header/>

      <BeerListManagement beers={beers}/>

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