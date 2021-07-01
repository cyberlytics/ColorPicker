/**
 * Ein verfasster Kommentar, der aus der DB abgerufen wird.
 * Umfasst zwei Spalten, die erste Entält eine UserNummer(o.ä.)
 * und die zweite den abgegebenen Kommentar.
 */

import React, { Component } from 'react';



function Comment (props) 
{
    
      return (props.text !== "")?(
        <div>
         
            <h3>Kommentare</h3>
            <text>
              {props.text}
            </text>
          
        </div>
      ):"";
}

export default Comment;