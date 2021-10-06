import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

const Login = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signInWithEmailAndPassword(getAuth(app), email, password)
            .then(response => {
            userContext.setUser(response.user.email);
            alert('Welcome back to our app')
            .catch(e => {
                alert('Sorry something went wrong')
            })

        })
    }


    return (
        <div>
            <form action="">
                <input type="text" placeholder="email..." />
                <input type="text" placeholder="password..." />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login
