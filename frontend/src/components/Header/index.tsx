import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import OrmaLogo from '../../../public/logo.png'
import Menu from '../../../public/menu-hamb.png'
import Orma from '../../../public/orma-favicon.png'
import { useState } from 'react'
import Close from '../../../public/close.png'

export default function Header(){

  const [openMenu,setOpenMenu] = useState(false)

  
  function menuToggle() {
    setOpenMenu(!openMenu)
  }

  return (
      <div className={styles.headerContainer}>
        <div className={styles.landing}>
          <div className={styles.menuhamb} onClick={() => {menuToggle()}}>
            <Image src={Menu} alt="menu" />
          </div>
          <div className={styles.headTitle}>
              <div className={styles.title}>
                <Image src={OrmaLogo} alt="OrmaLogo" width={100}/>
              </div>
          </div>
          <div className={styles.bit}>
            <Image width={44} height={60} src={Orma} alt="orma" />
          </div>
        </div>

        <nav className={styles.menu}>
          <ul className={openMenu ? styles.toggle :""}>
            <li className={styles.close} onClick={menuToggle} >
              <Image src={Close} alt="" width={25} height={25}/>
            </li>

            <li className={styles.anotherPages}>
              <Link href='/CreateBeer'>
                <button>Create Beer</button>
              </Link>
            </li>
            <li>
              <Link href='/BeerManagement' className={styles.managementCarButton}>
                <button>Beers Management </button>
              </Link>
            </li>

            <li>
              <Link href='/' className={styles.carListButton}>
                <button>Beers List</button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.logout}>
          <button> Logout </button>
        </div>


      </div>
    )
  
}
