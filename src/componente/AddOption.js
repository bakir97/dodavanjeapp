import React from 'react';

export default class AddOption extends React.Component{
   
      state={
        error:undefined
      };
    dodaj=(e)=>{
      e.preventDefault();
      const dodavanjeElementa=e.target.elements.text.value.trim();
       const error= this.props.dodajnesto(dodavanjeElementa);
  this.setState(()=>({error}));
  if (!error) {
    e.target.elements.text.value='';
  }
  }
  
    render(){
      return( <div>
        {this.state.error && <p className='error' >{this.state.error}</p>}
       <form  className='forma-text' onSubmit={this.dodaj} >
         <input className='forma-text__input' type="text" name="text"/>
         <button className='dugme' >Dodaj</button>
       </form>
      </div>
      );
    }
  }