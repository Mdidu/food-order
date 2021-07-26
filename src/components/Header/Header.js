import React from 'react';
import classes from './Header.module.css';
import image from '../assets/meals.jpg';
import CartButton from "./CartButton";

const Header = () => {

    return (
        <React.Fragment>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
                <CartButton type="button" />
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="Image header" />
            </div>
        </React.Fragment>
    );
};

export default Header;