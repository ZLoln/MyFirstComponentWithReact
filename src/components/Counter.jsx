/*import React, {Component} from 'react'

export default class Counter extends Component {
    render (){
        return (
            <div>Counter</div>
        )
    }
}*/

import React, {useState} from 'react';
import '../styles/Button.css';

function Counter(props){

    const [number, setNumber] = useState(0);
        //number es el valode de mi estado
        //setNumber lo que hace que se cambie
        //useState (el valor inicial);

        const counter = ()=>{
            setNumber (number + 1);
        }

    return(
        <div>
            <button className={`basic-btn ${props.clase}`} onClick={counter}>{props.text}  {number}</button>
        </div>
    )
}

export default Counter;

Counter.defaultProps ={
    text: '❤️'
}