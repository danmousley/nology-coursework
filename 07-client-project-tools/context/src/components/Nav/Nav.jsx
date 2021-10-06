import React, { useContext } from 'react'
import NavMenu from '../NavMenu/NavMenu'
import styles from './Nav.module.scss'
import { ThemeContext } from '../../context/UserProvider'

const Nav = (props) => {
    const themeContext = useContext(ThemeContext)
    return (
        <div className={styles.navbar, themeContext.isDarkTheme ? "dark" : "light"}>
            <a>MazinApp</a>
            <button onClick={themeContext.toggleTheme}>Theme</button>
            <div>
                <NavMenu />
            </div>
        </div>
    )
}

export default Nav
