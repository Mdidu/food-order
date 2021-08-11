import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import './AvailableMeals.css';

const AvailableMeals = props => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {

            const response = await fetch("https://react-http-cfe83-default-rtdb.europe-west1.firebasedatabase.app/Meals.json");

            if(!response.ok) {
                throw new Error("Something went wrong !");
            }

            const data = await response.json();
            const loadedMeals = [];

            for (const dataKey in data) {
                loadedMeals.push({
                    id: dataKey,
                    name: data[dataKey].name,
                    description: data[dataKey].description,
                    price: data[dataKey].price
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        // La méthode catch permet de ne pas entourer fetchMeals d'un try-catch mais de quand même avoir le catch
        fetchMeals().catch(error => {
            setIsLoading(false);
            setError(error.message);
        });
    }, []);

    let content = <p>Loading ....</p>;

    if(!isLoading) {
        content = <p>Found no movies.</p>;
    }

    if(error) {
        content = <p>{error}</p>;
    }

    if(meals.length > 0) {
        content = meals.map(meal => <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            amount="Amount" />);
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