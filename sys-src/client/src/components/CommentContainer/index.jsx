/**
 * Der Bereich im PopUp der sowohl die Möglichkeit bietet
 * einen Kommentar zu verfassen, als auch alte Kommentare einzusehen.
 * Enthält: 
 *  -AddComment
 *  -ScrollContainer
 */

 import React, { Component } from 'react'
 import AddComment from '../AddComment';
 import Comment from '../Comment';
 import './index.css'


 class CommentContainer extends Component 
{
  constructor(props)
  {
    super(props);
  }

  commentText = "vom Container";

    render() 
    {
        return (
          <div>
              <div id="addCommentBox">
                  <h3 id="test">Pal_ID: {this.props.paletteID}</h3>
                <AddComment paletteID={this.props.paletteID}/>
              </div>
              <div id="commentBox">
                <Comment paletteID={this.props.paletteID}/>
              </div>
          </div>
        );
    }

    

}

export default CommentContainer;