import React from 'react';
const Option = (props) => 
    (
      <div className='opcija' >
       <p className='opcija__text' > 
       {props.count}. {props.optionText}</p>
        <button
        className='dugme dugme--link'
          onClick={() => {
            props.obrisijedno(props.optionText);
          }}
        >
          remove
        </button>
      </div>
    );
  export default Option;