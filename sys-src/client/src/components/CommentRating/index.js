import React, { useState } from 'react';
import "./commentRating.css";
import CommentsIcon from "@material-ui/icons/Message";
import Rating from "@material-ui/lab/Rating";
import PopUpPalette from '../../components/PopUpPalette/index.jsx';

import { withStyles } from "@material-ui/core/styles";

function CommentRating(props) {
  

  

  //a styled rating, to fill the stars with a golden color
  const StyledRating = withStyles({
    iconFilled: {
      color: "#ffd700",
    },
  })(Rating);

  //when a user enters a new rating via the StyledRating component, this function manages the saving of the new rating with the necessary information in the database
  const submitRating = (saveRating, savePalette) => {
    fetch("http://localhost:5000/rating/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ rating: saveRating, palette_id: savePalette }),
    }).then(() => {
      console.log("Rating value changed successfully!");
    });
  };

  return (
    <div className="commentRating">
      

      {/**shows the average rating of the palette and enables user to add a new rating*/}
      <StyledRating
        name={props.paletteID}
        value={props.rating}
        size="small"
        defaultValue={0.0}
        onChange={(event, newValue) => submitRating(newValue, props.paletteID)}
      />
    </div>
  );
}

export default CommentRating;
