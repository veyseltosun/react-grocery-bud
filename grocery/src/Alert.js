import React from 'react'
import {useEffect} from "react";


function Alert({type, msg, removeAlert}) {
    useEffect(() =>{
        const timeout = setTimeout(()=>{
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)

    }, [])
    return (
    <div>


        <p className={`alert alert-${type}`}>{msg}</p>

    </div>
        )
    
}
export default Alert;