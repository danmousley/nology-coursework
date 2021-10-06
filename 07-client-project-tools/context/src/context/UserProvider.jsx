import React, {createContext, useState} from 'react'
import Nav from '../components/Nav/Nav'
import Home from '../components/home/Home'

export const UserContext = createContext({});
export const ThemeContext = createContext({})

const UserProvider = () => {

    const currentUser = {
        name: "John Doe"
    }

    const [user, setUser] = useState(currentUser);
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const handleTheme = (e) => {
        setIsDarkTheme(!isDarkTheme)
    }

    const themeData = {
        isDarkTheme: isDarkTheme,
        toggleTheme: handleTheme
    }

    return (
        <ThemeContext.Provider value={themeData}>
        <UserContext.Provider value={user}>
            <Nav />
            <Home />
        </ UserContext.Provider >
        </ThemeContext.Provider>
    )
}

export default UserProvider
