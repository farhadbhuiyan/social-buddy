import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import Container from '@material-ui/core/Container';
import Comments from '../Comments/Comments';
import './PostDetails.css';
import { IconButton } from '@material-ui/core';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const { id, title, body } = post;
  useEffect(() => {
    const api = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(api)
      .then(res => res.json())
      .then(data => setPost(data))
  }, []);

  // Load comments
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const commentApi = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    fetch(commentApi)
      .then(res => res.json())
      .then(data => setComments(data))
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', marginTop: '67px', paddingBottom: '20px' }}>
        <IconButton>
          <BorderColorIcon />
        </IconButton>
        <b>Post ID: {id}</b>
        <h2>{title}</h2>
        <p style={{ paddingBottom: '20px' }}>{body}</p>
        <div className="stats">
          <span className="likes"> 50 Likes </span>
          <span className="comments"> .{comments.length} Comments</span>
        </div>
        <div className="post-controls">
          <button className="btn"> <i className="fa fa-thumbs-up" aria-hidden="true"></i> Like </button>
          <button className="btn"> <i className="fa fa-comment" aria-hidden="true"></i> Comment </button>
          <button className="btn"> <i className="fa fa-share" aria-hidden="true"></i> Share </button>
        </div>
        <div className="comment-area">
          {
            comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
          }
        </div>
      </Container>
    </React.Fragment>
  );
};

export default PostDetails;