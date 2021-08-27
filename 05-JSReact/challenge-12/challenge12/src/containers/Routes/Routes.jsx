import React from 'react'
import { Router } from '@reach/router';
import DashBoard from '../DashBoard';
import Favourites from '../Favourites';
import Login from '../Login';
import NotFound from '../../components/NotFound';

const Routes = () => {
    return (
        <Router>
            <DashBoard path="/" />
            <Favourites path="favourites" />
            <Login path="login" />
            <NotFound default />
        </Router>
    )
}

export default Routes
