import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>Welcome to Site</h2>
      <button>Login here</button>
    </div>
  )
}

export default Header
