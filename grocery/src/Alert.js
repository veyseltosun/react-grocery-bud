import React from 'react'
import {useEffect} from "react";


function Alert({type, msg}) {
    return 
    (
        <p className={`alert alert-${type}`}>{msg}</p>

    )
}
  

export default Alert