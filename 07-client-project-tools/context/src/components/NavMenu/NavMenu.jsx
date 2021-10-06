import React, { useContext } from 'react'
import { UserContext } from '../../context/UserProvider'
import styles from './NavMenu.module.scss'

const NavMenu = () => {

    const data = useContext(UserContext)

    return (
        <>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>{data.name} 
                    {/* <i className={styles.fa, styles.fa-caret-down}></i> */}
                </button>
                <div className={styles.dropdownContent}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div> 
        </>
    )
}

export default NavMenu
