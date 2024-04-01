import React from 'react' ;
import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Todolist from './Todolist';
import './index.css';
const App=()=>{
  const[items,latestitems]=useState("");
  const[hp,pitem]=useState([]);
  const delitem=(id)=>{
    pitem((hp)=>{
      return hp.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }
  return(
    <>
    <div className='first-box'>
      <div className='second-box'>
      <p><h1>Todo list</h1></p>
      <div className='third-box'>
      <TextField id="standard-basic" label="Standard" variant="standard" 
        value={items}
          onChange={(event)=>{
            console.log(event.target.value);
            latestitems(event.target.value);
          }}
        />
        <Button onClick={()=>{
  pitem((hp)=>{
    return [...hp, items];
  });
  latestitems(''); // Clearing the input field
}}>
  <h1>+</h1>
</Button>
      </div>

        <ol>
            {hp.map((val,index)=>{
              return(<Todolist
                key={index}
                id={index}
                text={val}
                onselect={delitem}/>
              )
            })}
        </ol>
      </div>
    </div>
    </>
  )
}

export default App;
