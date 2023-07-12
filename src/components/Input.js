import React from "react";

function Input(props)
{
    return(
    <div className="inputField">
        <input type="text" placeholder="Enter the task" onChange={props.onInput} value={props.inputValue}/>
        <button onClick={props.onAdd}>+</button>
    </div>
    )
}

export default Input;