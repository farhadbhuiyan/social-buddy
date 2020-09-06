import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = (props) => {
  const { id, name, email, body } = props.comment;
  const [photos, setPhotos] = useState([]);
  const { url } = photos;
  useEffect(() => {
    const photoApi = `https://jsonplaceholder.typicode.com/photos/${id}`;
    fetch(photoApi)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, []);
  return (
    <div className="single-comment">
      <div className="image-container">
        {
          <img className="image" src={url} alt="" />
        }
      </div>
      <div className="comment-details">
        <h4 className="name">Name: {name}</h4>
        <h6 className="email">Email: <i>{email}</i></h6>
        <p className="body">{body}</p>
      </div>
    </div>
  );
};

export default Comments;