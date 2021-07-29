import React, { Fragment } from 'react';
import classes from './Header.module.css';
import CartButton from "./CartButton";

import mealsImage from '../../assets/meals.jpg';

const Header = props => {

    const btnHandler = () => {
        console.log("eee");
    };
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>ReactMeals</h1>
                <CartButton type="button" onClick={btnHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Table full foods" />
            </div>
        </Fragment>
    );
};

export default Header;