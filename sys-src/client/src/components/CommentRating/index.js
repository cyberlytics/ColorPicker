/**
 * Enthält den Block mit Kommentar-Logo und Bewertungsdurchschnitt.
 * Enthält: 
 *  -Rating
 */

import "./commentRating.css"

import CommentsIcon from '@material-ui/icons/Message';
import Rating from '@material-ui/lab/Rating';

function CommentRating(props) {
    return (
    <div className="commentRating">
        <CommentsIcon style={{color:"#808080"}}/>
        <Rating name="half-rating-read" defaultValue={props.rating} readOnly size="large"/>
    </div>
    );
}

export default CommentRating;