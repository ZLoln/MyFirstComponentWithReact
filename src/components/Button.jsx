import React from 'react';
import '../styles/Button.css';

function Button(props){
    return(
        <>
        <button className={`basic-btn ${props.clase}`}>{props.text}</button>
        </>
    );
}

export default Button;

Button.defaultProps={
    text: 'Send',
}