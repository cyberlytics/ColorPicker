/**
 * Ein verfasster Kommentar, der aus der DB abgerufen wird.
 * Umfasst zwei Spalten, die erste Entält eine UserNummer(o.ä.)
 * und die zweite den abgegebenen Kommentar.
 */

import React, { useState, useEffect } from 'react';

const url = 'http://localhost:5000/comment/all/';


function Comment (props) 
{
  const [data, setData] = useState([])
  const url_all = url + props.paletteID;

   const getComment = () =>
    {
          fetch(url_all)   
                  .then((response) => 
                  {
                    if (response.ok) return response.json();
                    throw console.log("something went wrong while requesting posts");
                    
                  })
                  .then((comments) => 
                  {
                    if(comments.length!=0)
                      {  
                        setData(comments);
                      }
                  })
      };

      useEffect(() => {
        getComment();
      }, []);

      return (
        <div>         
            <h3>Kommentare</h3>

            {//<button onClick={getComment} >gib koment</button>
            } 
              <div id="scrollDiv">              
                  
                 {(data.length===0)?
                   (
                     <h3>Es gibt noch keine Kommentare</h3>
                   ):
                   (                     
                    data.map((item, index) => (<div><h4>Kommentar #{index+1}</h4> <li>{item.comment}</li> </div>))
                   )
                  }    
              </div>              
        </div>
      );
}

export default Comment;