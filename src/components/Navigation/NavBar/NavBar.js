import React from 'react';
import classes from './NavBar.module.css'
import NavItems from './NavItems/NavItems'
import Logo from '../../UI/Logo/Logo'
import Button from '../../UI/Button/Button'

import plus from '../../../assets/plus.png'
import pallete from '../../../assets/pallete.png'

import ButtonContext from '../../../context/ButtonContext'
import Aux from '../../../hoc/Aux'

const navBar = (props) => {

    return (
        <header className={classes.NavBar}>
            <div className={classes.Logo}>
                <Logo />
                <h1>Memo.io</h1>
            </div>
            <div className={classes.Button}>
                <ButtonContext.Consumer>
                    {(buttonContext) => (
                        <Aux>
                            <Button image={plus} alt="plus" clicked={buttonContext.addNote} />
                            <Button image={pallete} alt="pallete" />
                        </Aux>)
                    }
                </ButtonContext.Consumer>
            </div>
            <nav>
                <NavItems />
            </nav>
        </header>
    )
}

export default navBar;