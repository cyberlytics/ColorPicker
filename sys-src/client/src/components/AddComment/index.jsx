/**
 * Bietet die Möglichkeit einen neuen Kommentar zu verfassen und abzuschicken.
 * Besteht aus einem User-Icon und einem Texteingabefeld.
 * (Wie soll Speicherung erfolgen, also über Button, Enter-Taste?)
 */


import React, { Component } from 'react';
import { Button } from '../Button'

class AddComment extends Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { comments: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    com_text = "";
    palette_ID = this.props.paletteID;

    submitComment = (com_text, palette_ID) => 
    {
      //wenn der Kommentarfenster leer ist, wird nichts gespeichert
      if (com_text.length !== 0) {
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
      //popupfenster wird geschlossen
      this.props.btnPopup(false);
    }
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
            <Button title={"Hinzufügen"} onClick={() => this.submitComment(this.com_text, this.palette_ID)  }></Button>
           </form> 
          </div>
        );
      }
    
      //speichert den Kommentar aus dem Komentarfenster ab
      handleChange(e) 
      {
        this.setState({ text: e.target.value });
        this.com_text=e.target.value;
      } 
}


export default AddComment;