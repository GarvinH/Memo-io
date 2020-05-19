import React, { useContext } from 'react';
import classes from './NavBar.module.css'
import NavItems from './NavItems/NavItems'
import Logo from '../../UI/Logo/Logo'
import Button from '../../UI/Button/Button'

import plus from '../../../assets/plus.png'
import pallete from '../../../assets/pallete.png'

import NoteContext from '../../../context/NoteContext'
import Aux from '../../../hoc/Aux'

const NavBar = (props) => {

    const noteContext = useContext(NoteContext)

    return (
        <header className={classes.NavBar} style={{zIndex: noteContext.zIndex+2}}>
            <div className={classes.Logo}>
                <Logo />
                <h1>Memo.io</h1>
            </div>
            <div className={classes.Button}>
                <Aux>
                    <Button image={plus} alt="plus" clicked={noteContext.addNote} />
                    <Button image={pallete} alt="pallete" clicked={() => noteContext.updateModal(3)} />
                </Aux>
            </div>
            <nav>
                <NavItems />
            </nav>
        </header >
    )
}

export default NavBar;