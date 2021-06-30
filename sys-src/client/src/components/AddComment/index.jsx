/**
 * Bietet die Möglichkeit einen neuen Kommentar zu verfassen und abzuschicken.
 * Besteht aus einem User-Icon und einem Texteingabefeld.
 * (Wie soll Speicherung erfolgen, also über Button, Enter-Taste?)
 */


import React, { Component } from 'react';
import { useState } from 'react';
import Comment from '../Comment';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    com_text = "";
    com_text_add = "first!!!";
    com_arr = ['123','asd'];

    render() {
        return (
          <div>
            <h5>Geben Sie Ihr Kommentar ab</h5>            
            <form onSubmit={this.handleSubmit}>
            
            <textarea
                id="new-comment"                
                onChange={this.handleChange}
                value={this.state.text}
                
            />
            <p></p>
            <button onClick={() => this.props.addCommentChild(this.com_text)}>
                Hinzufügen 
            </button>


           </form>
           
          

          </div>
        );
      }
    
      handleChange(e) 
      {
        this.setState({ text: e.target.value });
      }

      handleSubmit(e) 
      {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        
        this.setState(state => ({
          comments: state.comments.concat(newItem),
          text: ''
        }));
      }


}


export default AddComment;