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

  addComment=(text) =>
  {


   

  }




    render() 
    {
        return (
          <div>
              <div id="addCommentBox">
                  <h3 id="test">test</h3>
                <AddComment addCommentChild={this.addComment}/>
              </div>
              <div id="commentBox">
                <Comment text = "first"/>
              </div>
          </div>
        );
    }

    

}

export default CommentContainer;