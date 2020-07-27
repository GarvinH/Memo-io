import React, { useContext } from 'react';
import classes from './Login.module.css'
import Aux from '../../../hoc/Aux'
import axios from 'axios'
import NoteContext from '../../../context/NoteContext'

const submit = (event, noteContext) => {
    event.preventDefault()
    const data = new URLSearchParams();
    data.append('username', event.target.username.value)
    data.append('password', event.target.password.value)
    axios.post('/login', data, {withCredentials: true}).then(res => {
        noteContext.updateNotes(res.data)
        noteContext.updateModal(0)
        noteContext.authenticate()
    }).catch(err => {
        console.log(err)
    })
}

const Login = () => {
    const noteContext = useContext(NoteContext)
    return (
    <Aux>
        <h1 className={classes.title}>Login</h1>
        <hr className={classes.hr}></hr>
        <form className={classes.login} onSubmit={event => submit(event, noteContext)}>
            <label htmlFor="email">
                Email:
                <input type="email" placeholder="Enter your email here" name="username"/>
            </label>

            <label htmlFor="password">
                Password:
                <input type="password" placeholder="Enter your password here" name="password"/>
            </label>

            <input type="submit" value="Submit" />
        </form>
    </Aux>
)}

export default Login;