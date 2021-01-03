import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div>
            <p className="heading"> {props.children}</p>
            <input type="text" onChange={props.change} value={props.currentName}/>
        </div>
    )
};

export default userInput;