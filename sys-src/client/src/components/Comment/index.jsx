/**
 * Ein verfasster Kommentar, der aus der DB abgerufen wird.
 * Umfasst zwei Spalten, die erste Entält eine UserNummer(o.ä.)
 * und die zweite den abgegebenen Kommentar.
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
          <div>
            <h5>Geben Sie Ihr Kommentar ab</h5>            
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">                
            </label>
            <input
                id="new-todo"                
                onChange={this.handleChange}
                value={this.state.text}
            />
            <p></p>
            <button>
                Hinzufügen 
            </button>


           </form>
           <CommentsList items={this.state.comments} />
          </div>
        );
      }
    
      handleChange(e) 
      {
        this.setState({ text: e.target.value });
        console.log("output");
        console.log(this.state.comments);
      }

      handleSubmit(e) 
      {
        e.preventDefault();
        if (this.state.text.length === 0) {
            console.log("leer");
          return;
        }
        console.log("drin");
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

class CommentsList extends Component 
{
    render() {
      return (
        <div>
            <h3>Kommentare</h3>
          {this.props.items.map(item => (
            //  <h5>Komentar #{Comment.state.comments.length + 1}</h5>
            <p key={item.id}>
                
                {item.text}</p>
          ))}
        </div>
      );
    }
}

export default Comment;