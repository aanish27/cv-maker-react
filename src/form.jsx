/* eslint-disable react/prop-types */
import { useState } from 'react';
import  BasicInfo  from "./basicInfo";
import  Education  from "./education";
import  Experience from "./experience";
export default Form;

function Form() {

    const [edit , setEdit] =  useState(true)

    function handleClick(e) {
        e.preventDefault();
        if (!edit) {
            setEdit(true)
        }
        else {
            setEdit(false)
        }


    }


    return (
        <form action="">
            <BasicInfo isEditing={edit} />
            <Education isEditing={edit} />
            <Experience isEditing={edit} />
            <Button handleClick={handleClick} isEditing={edit}/>
        </form>

    )
}

function Button({ isEditing , handleClick }) {


    return (
        isEditing ? <button onClick={handleClick}> Submit </button> : <button onClick={handleClick}> Edit</button>
    )

}







