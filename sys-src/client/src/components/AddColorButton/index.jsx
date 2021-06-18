/**
 * Button der lediglich Text anzeigt und auf einen Click
 * eine bestimmte Funktion ausführt.
 */
 import React, { Component } from 'react';
 import './index.css';

 class AddColorButton extends Component {
     state = {  }
     render() { 
         return ( <div className="button-add-color" onClick={()=>this.props.handleAddChild()}><span className="button-add-color-text">+</span></div>);
     }
 }
  
 export default AddColorButton;