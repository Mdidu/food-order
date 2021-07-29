import React from 'react';
import MealItemForm from './MealItemForm';
import Button from '../../UI/Button';
import classes from './MealItem.module.css';

const MealItem = props => {
    const price = `${props.price.toFixed(2)}`;
    return (
        <li >
            <div className={classes.meal}>
                <div><h3>{props.title}</h3></div>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
                <div>
                    <MealItemForm id={props.id} />
                </div>
                {/*<div>*/}
                {/*    <span>{props.amount}</span>*/}
                {/*    <input type="number" value="1"/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <Button>+ Add</Button>*/}
                {/*</div>*/}
            </div>
        </li>
    );
};

export default MealItem;