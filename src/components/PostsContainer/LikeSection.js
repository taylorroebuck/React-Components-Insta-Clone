import React from 'react';
import CommentInput from "../CommentSection/CommentInput";

const LikeSection = props => {
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={props.addLike} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" onClick={props.submitComment} />
      </div>
    </div>
    <p className="like-number">
      
  {props.likes} likes</p>
</div>
  )
};

export default LikeSection;
