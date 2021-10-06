import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import styles from './home.module.scss'

const Home = () => {

    const data = useContext(UserContext)
    const data = useContext(ThemeContext)

    const 

    return (
        <div className={styles.container}>
            <h2>Welcome Home <br/> {data.name}! </h2>
        </div>
    )
}

export default Home
