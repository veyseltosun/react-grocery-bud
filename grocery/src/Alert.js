import React from 'react'
import {useEffect} from "react";


function Alert({type, msg}) {
    return (
    <div>


        <p className={`alert alert-${type}`}>{msg}</p>

    </div>
        )
    
}
export default Alert;