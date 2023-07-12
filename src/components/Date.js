import React from "react";

function CurrentDate()
{
    var now = new Date()
    var date = now.getDate()
    var month = 1 + now.getMonth()
    var year = now.getFullYear()
    year = year.toString().slice(2,4)
    return(
        <h1 className="dateValue">{date}/{month}/{year}</h1>
    )
}

export default CurrentDate;