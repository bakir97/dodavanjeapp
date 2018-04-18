import React from 'react';
const Action = (props)=>
    ( 
    <div>

     <button 
     className='velikoDugme'
     disabled={!props.dugme} onClick={props.nekibroj} >Nasumični Element</button>
    </div>
    );
  
export default Action;