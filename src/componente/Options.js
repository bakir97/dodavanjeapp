import React from 'react';
import Option from './Option';
const Options=(props)=>
( <div>
  <div className='widget-header' >
      <h3 className='widget-header__h3' >Tvoje Opcije</h3>
      <button 
      className='dugme dugme--link'
      onClick={props.obrisi}  >Remove All</button>
      </div>
      {props.options.length===0 && <p className='widget__poruka' >Upisi elemente da bi započeo</p> }
     {props.options.map((opcija,i) => (
          <Option
            key={opcija}
            optionText={opcija}
            count={i + 1}
            obrisijedno={props.obrisijedno}
          />
        ))}
    </div>
    );
  
  export default Options;