/**
 * Ein verfasster Kommentar, der aus der DB abgerufen wird.
 * Umfasst zwei Spalten, die erste Entält eine UserNummer(o.ä.)
 * und die zweite den abgegebenen Kommentar.
 */

import React, { Component } from 'react';

const url = 'http://localhost:5000/comment/all/';



function Comment (props) 
{
   const url_all = url + props.paletteID;
   const test = fetch(url_all)
                  .then((response) => 
                  {
                    if (response.ok) return response.json();
                    throw console.log("something went wrong while requesting posts");
                  })
   
   console.log(test);



      return (
        <div>
         
            <h3>Kommentare</h3>
              {}
              <br/>test
                    {
                    }
          
        </div>
      );
}

export default Comment;