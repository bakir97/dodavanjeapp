import React, { Component } from 'react';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import OpcijaModal from './OpcijaModal';
class App extends Component {
  state={
    options:[],
    izabranaopcija: undefined
  };
  
  
zatvoriModal=()=>{
  this.setState(()=>({
    izabranaopcija:undefined
  }))
  
}

  dodaj=(dodavanjeElementa)=>{
    if(!dodavanjeElementa){
      return 'Upiši validan element';
    }else if(this.state.options.indexOf(dodavanjeElementa) >-1){
      return 'Već postoji taj element';
    }
this.setState((prevState)=>({ options:prevState.options.concat(dodavanjeElementa)}));
  }
  random=()=>{
    const randombroj=Math.floor((Math.random() *this.state.options.length));
   const option=this.state.options[randombroj];
    this.setState({
      izabranaopcija:option
    })
  }
  obrisi=()=>{
    this.setState(()=>({options:[]}));}


    obrisijedno=(dodavanjeElementa)=>{
      this.setState ((prevState)=>({
        options: prevState.options.filter((option)=>dodavanjeElementa !== option)
      }));}

      componentDidMount=()=>{
        try {
          const json=localStorage.getItem('opcije');
          const opcije=JSON.parse(json);
          if (opcije) {
            this.setState(()=>({options:opcije}));
            
          }
        } catch (e) {
          
        }
      }
      componentDidUpdate=(prevProps, prevState)=>{
    if (prevState.options.length !== this.state.options.length) {
      const json=JSON.stringify(this.state.options);
      localStorage.setItem('opcije',json);
    }
  }
  render() {
    
    return (
      <div className="App">
      
      <Header />
      <div className='container' >
      <Action  dugme={this.state.options.length>0} nekibroj={this.random} />
      <div className='widget' >
      <Options obrisi={this.obrisi} obrisijedno={this.obrisijedno} options={this.state.options}  />
      <AddOption dodajnesto={this.dodaj}/>
      </div>
      </div>
      <OpcijaModal zatvoriModal={this.zatvoriModal} izabranaopcija={this.state.izabranaopcija}/>
      <p className="autor" >Radio Cicvara Bakir </p>
      </div>
      
    );
  }
}


export default App;
