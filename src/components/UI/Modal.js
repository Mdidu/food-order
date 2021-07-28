import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = props => {
    return (
        <Card className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </Card>
    );
};

const Modal = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                document.getElementById('overlay-root')
            )}
        </Fragment>
    );
};

export default Modal;