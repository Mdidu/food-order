import React from 'react';
import classes from './Header.module.css';
import image from '../assets/meals.jpg';
import CartButton from "./CartButton";

const Header = () => {

    return (
        <div>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
            </header>
            <CartButton type="button" />
            <img className={classes['main-image']} src={image} />
        </div>
    );
};

export default Header;