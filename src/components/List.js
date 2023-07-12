import React from "react";

function List(props)
{
    return (
        <li key={props.id} id={props.id} onClick={()=>{props.onDelete(props.id)}}>{props.itemValue}</li>
    )
}

export default List;