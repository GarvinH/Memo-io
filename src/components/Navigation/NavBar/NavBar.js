import React from 'react';
import classes from './NavBar.module.css'
import NavItems from './NavItems/NavItems'
import Logo from '../../UI/Logo/Logo'
import Button from '../../UI/Button/Button'

import plus from '../../../assets/plus.png'
import pallete from '../../../assets/pallete.png'

import NoteContext from '../../../context/NoteContext'
import Aux from '../../../hoc/Aux'

const navBar = (props) => {

    return (
        <header className={classes.NavBar}>
            <div className={classes.Logo}>
                <Logo />
                <h1>Memo.io</h1>
            </div>
            <div className={classes.Button}>
                <NoteContext.Consumer>
                    {(noteContext) => (
                        <Aux>
                            <Button image={plus} alt="plus" clicked={noteContext.addNote} />
                            <Button image={pallete} alt="pallete" clicked={()=>noteContext.updateModal(3)}/>
                        </Aux>)
                    }
                </NoteContext.Consumer>
            </div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default navBar;