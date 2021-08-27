import React from 'react'
import { Link } from '@reach/router';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
            <Link to="login">Login</Link>
        </div>
    )
}

export default Navbar
