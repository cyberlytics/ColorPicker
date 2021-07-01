/**
 * Enthält den Block mit Kommentar-Logo und Bewertungsdurchschnitt.
 * Enthält: 
 *  -Rating
 */

import "./commentRating.css"
import CommentsIcon from '@material-ui/icons/Message';
import Rating from '@material-ui/lab/Rating';

import { withStyles } from '@material-ui/core/styles';

function CommentRating(props) {

    const StyledRating = withStyles({
        iconFilled: {
            color: '#ffd700',
        },
    })(Rating);

    const submitRating = (saveRating, savePalette) => {
        console.log(saveRating);
        console.log('Id to save rating for: ' + savePalette);
          fetch("http://localhost:5000/rating/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ rating: saveRating, palette_id: savePalette }),
          }).then(() => {
            console.log('Rating value changed successfully!');
          });
        };

    return (
    <div className="commentRating">
        <CommentsIcon style={{color:"#808080"}}/>
        {console.log(props.rating)}
        <StyledRating name={props.paletteID} value={props.rating} size="small" defaultValue={0.0} onChange={(event, newValue) => submitRating(newValue, props.paletteID)}  />
    </div>
    );
}

export default CommentRating;