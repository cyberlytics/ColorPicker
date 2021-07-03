/**
 * Container der alle abgegebenen Kommentare zu einer Palette umfasst
 * und diese anzeigt.
 * Enthält: 
 *  -Comment
 */


 import React, { Component } from 'react';

 function ScrollContainer (props) 
{


    return (
        <div>
            text mit kommentaren.
            <br />
            {console.log("im cont: "+props.text)}
            na {props.text} na2
        </div>
    );


}

export default ScrollContainer;