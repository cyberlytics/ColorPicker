/**
 * Enthält den Block mit Kommentar-Logo und Bewertungsdurchschnitt.
 * Enthält: 
 *  -Rating
 */

import "./commentRating.css"

import CommentsIcon from '@material-ui/icons/Message';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { withStyles } from '@material-ui/core/styles';

function CommentRating(props) {

    const StyledRating = withStyles({
        iconFilled: {
            color: '#ffd675',
        },
        iconHover: {
            color: '#ffd700',
        }
    })(Rating);
    const submitRating = (saveRating, savePaletteId,) => {
        console.log(saveRating);
        console.log(savePaletteId);
          fetch("http://localhost:5000/rating/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({ rating: saveRating, palette_id: savePaletteId }),
          }).then(() => {
            console.log('Rating value changed successfully!');
          });
        };

    return (
    <div className="commentRating">
        <CommentsIcon style={{color:"#808080"}}/>
        <StyledRating name="half-rating" value={props.rating} size="small" defaultValue={props.rating} onChange={(event, newValue) => submitRating(newValue, props.paletteId)} icon={<StarBorderIcon fontSize="inherit" />} />
    </div>
    );
}

export default CommentRating;