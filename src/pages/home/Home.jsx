import React from 'react'
import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import useCollection from '../../hooks/useCollection'

function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions',
    ['uid', '==', user.uid],
    ['createdAt', 'desc']
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>{error && <p>{error}</p>}</div>
      <div className={styles.sidebar}></div>
    </div>
  )
}

export default Home
