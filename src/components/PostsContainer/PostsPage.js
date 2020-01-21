//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("postsPage props", props);
  return (
    <div className="posts-container-wrapper">
      {props.postData.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;

