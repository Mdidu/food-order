import React from 'react';
import Button from '../UI/Button';
import classes from './Meal.module.css';

const Meal = props => {
    return (
        <li >
            <div className={classes.meal}>
                <h3>{props.title}</h3>
                <p className={classes.description}>{props.description}</p>
                <span className={classes.price}>{props.price}</span>
                <div>
                    <span>{props.amount}</span>
                    <input type="number" className={classes.amount} value="1"/>
                </div>
                <div className={classes.actions}>
                    <Button >+ Add</Button>
                </div>
            </div>


        </li>
    );
};

export default Meal;