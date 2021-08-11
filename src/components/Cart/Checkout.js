import React, { useRef } from 'react';
import useInput from '../../hooks/use-input';
import classes from './Checkout.module.css';

const isNotEmpty = value => value.trim() !== "";
const isFiveChars = value => value.trim().length === 5;
const inputHasError = (inputHasError) =>
    inputHasError ? `${classes.control} ${classes.invalid}` : classes.control;

const Checkout = (props) => {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: inputNameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(isNotEmpty);

    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: inputStreetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreetInput
    } = useInput(isNotEmpty);

    const {
        value: enteredPostal,
        isValid: enteredPostalIsValid,
        hasError: inputPostalHasError,
        valueChangeHandler: postalChangeHandler,
        inputBlurHandler: postalBlurHandler,
        reset: resetPostalInput
    } = useInput(isFiveChars);

    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: inputCityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCityInput
    } = useInput(isNotEmpty);

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

    const confirmHandler = (event) => {
        event.preventDefault();

        // Si un champ est invalide, on arrête la sousmission
        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });

        // Reset des différents champs
        resetNameInput();
        resetStreetInput();
        resetPostalInput();
        resetCityInput();
    };

    // définition des classes css utilisé selon résultat de la ternaire
    const nameInputClasses = inputHasError(inputNameHasError);
    const streetInputClasses = inputHasError(inputStreetHasError);
    const postalInputClasses = inputHasError(inputPostalHasError);
    const cityInputClasses = inputHasError(inputCityHasError);

    return (
        <form onSubmit={confirmHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Name *</label>
                <input type="text" id="name"
                   onChange={nameChangeHandler}
                   onBlur={nameBlurHandler}
                   value={enteredName}
                />
                {inputNameHasError && <p>Invalid name</p>}
            </div>
            <div className={streetInputClasses}>
                <label htmlFor="street">Street *</label>
                <input type="text" id="street"
                   onChange={streetChangeHandler}
                   onBlur={streetBlurHandler}
                   value={enteredStreet}
                />
                {inputStreetHasError && <p>Invalid street</p>}
            </div>
            <div className={postalInputClasses}>
                <label htmlFor="postal">Postal Code *</label>
                <input type="text" id="postal"
                   onChange={postalChangeHandler}
                   onBlur={postalBlurHandler}
                   value={enteredPostal}
                />
                {inputPostalHasError && <p>Invalid postal ( 5 characters required) </p>}
            </div>
            <div className={cityInputClasses}>
                <label htmlFor="city">City *</label>
                <input type="text" id="city"
                   onChange={cityChangeHandler}
                   onBlur={cityBlurHandler}
                   value={enteredCity}
                />
                {inputCityHasError && <p>Invalid city</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit} disabled={!formIsValid}>Confirm</button>

            </div>
        </form>
    );
};

export default Checkout;