/**
 * Bietet die Möglichkeit einen neuen Kommentar zu verfassen und abzuschicken.
 * Besteht aus einem User-Icon und einem Texteingabefeld.
 * (Wie soll Speicherung erfolgen, also über Button, Enter-Taste?)
 */


import React, { Component } from 'react';
import { useState } from 'react';
import Comment from '../Comment';

class AddComment extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { comments: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    com_text = "qwe";
    palette_ID = this.props.paletteID;

    submitComment = (com_text, palette_ID) => 
    {
      fetch("http://localhost:5000/comment/add", 
      {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ comment: com_text, paletteID: palette_ID }),
      }).then(() => {
        console.log(palette_ID, com_text);
        
      });
    };
  

    render() {
        return (
          <div>
            <h3>Geben Sie Ihr Kommentar ab</h3>            
            <form onSubmit={this.handleSubmit}>
            <div id="newCommentDiv" >
            <textarea
                id="newComment"
                rows = "5"
                cols = "70"
                placeholder = "Schreiben Sie ihr Kommentar hier..."
                 
                onChange={this.handleChange}
                value={this.state.text}
                
            />
            </div>
            <button id="btnAdd" onClick={() => this.submitComment(this.com_text, this.palette_ID)  }>
                Hinzufügen 
            </button>


           </form>
           
          

          </div>
        );
      }
    
      handleChange(e) 
      {
        this.setState({ text: e.target.value });
        this.com_text=e.target.value;
        console.log("" + this.com_text);
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