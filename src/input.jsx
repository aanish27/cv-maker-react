/* eslint-disable react/prop-types */
import { useState } from 'react';
function Input({ label, type, isEditing }) {
    const [text , setText] =  useState("")

    function handleChange(e) {
        setText(e.target.value)

    }

    if(isEditing) {
        return (
            <>
                <label>{label}</label>
                <input type={type} onChange={handleChange}  value={text}/>
           </>
        )
    }
    else {
        return(
            <span> {text} </span>
        )
    }
}

export default Input;

