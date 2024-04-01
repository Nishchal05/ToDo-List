import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
const Todolist=(props)=>{
    return(
        <li><Button onClick={()=>{
            console.log("del")
            props.onselect(props.id);
        }}><DeleteIcon className='del' fontSize='20px'></DeleteIcon></Button>{" "+props.text}</li>
    )
}
export default Todolist;