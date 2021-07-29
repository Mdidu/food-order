import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} ></div>;
};

const ModalOverlay = props => {
    return (
        <Card>
            <div className={classes.modal}>{props.children}</div>
        </Card>
    );
};

const portalElement = document.getElementById('overlays')

const Modal = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;