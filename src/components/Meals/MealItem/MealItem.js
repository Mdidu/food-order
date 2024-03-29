import React, {useContext } from 'react';
import MealItemForm from './MealItemForm';
import Button from '../../UI/Button';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li >
            <div className={classes.meal}>
                <div><h3>{props.name}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                <div>
                    <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
                </div>
            </div>
        </li>
    );
};

export default MealItem;