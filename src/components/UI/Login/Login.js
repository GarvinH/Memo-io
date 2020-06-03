import React from 'react';
import classes from './Login.module.css'
import Aux from '../../../hoc/Aux'

const login = () => (
    <Aux>
        <h1 className={classes.title}>Login</h1>
        <hr className={classes.hr}></hr>
        <form className={classes.login}>
            <label htmlFor="email">
                Email:
                <input type="email" placeholder="Enter your email here" />
            </label>

            <label htmlFor="password">
                Password:
                <input type="password" placeholder="Enter your password here" />
            </label>

            <input type="submit" value="Submit" />
        </form>
    </Aux>
)

export default login;