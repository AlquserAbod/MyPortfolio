import styles from './navbar.module.scss';
import noBgLogoUrl from '@/assets/noBgLogo.png';

import React from 'react'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logoHolder}>
            <img src={noBgLogoUrl} alt="logo" className={styles.logo} />
        </div>
    </nav>
  )
}

export default Navbar
