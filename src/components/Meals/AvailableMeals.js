import React, { useRef ,useState, useCallback } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import './AvailableMeals.css';

const AvailableMeals = props => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const oneExect = useRef(false);

    const fetchMealsHandler = useCallback(async () => {
        oneExect.current = true;

        try {
            const response = await fetch("https://react-http-cfe83-default-rtdb.europe-west1.firebasedatabase.app/Meals.json");

            if(!response.ok) {
                throw new Error("No data");
            }

            const data = await response.json();

            const arrayMeals = [data.Meal1, data.Meal2, data.Meal3, data.Meal4];

            const transformMeals = arrayMeals.map(mealData => {
                return {
                    id: mealData.id,
                    name: mealData.name,
                    description: mealData.description,
                    price: mealData.price
                }
            });

            console.log("da");
            setMeals(transformMeals);
            console.log("do");

        } catch (error) {
            setError(error.message);
        }
    }, [oneExect]);

    if(!oneExect.current) {
        fetchMealsHandler();
    }

    let content = <p>Loading ....</p>;

    if(meals.length > 0) {
        content = meals.map(meal => <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            amount="Amount" />);
    } else {
        if(isLoading) setIsLoading(!isLoading);
    }

    if(error) {
        content = <p>{error}</p>;
        setError(null);
    }

    if(!isLoading && meals.length === 0) {
        content = <p>Found no movies.</p>;
    }

    return (
        <section className="meals">
            <Card>
                <ul>
                    {content}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;