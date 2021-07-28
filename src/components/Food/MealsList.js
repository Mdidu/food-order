import React from 'react';
import Card from '../UI/Card';
import Meal from './Meal';

const MealsList = props => {
    return (
        <Card className="meals">
            <ul>
                {props.meals.map((meal) => (
                    <Meal key={meal.id} title={meal.name} description={meal.description} price={meal.price} amount="Amount"></Meal>
                ))}
            </ul>
        </Card>
    );
};

export default MealsList;