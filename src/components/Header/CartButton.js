import React from 'react';
import classes from './CartButton.module.css';

const CartButton = props => {
    return (
        <button type={props.type} className={classes.button}>
            Your Cart
        </button>
    );
};

export default CartButton;