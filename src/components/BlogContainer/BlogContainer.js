import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BlogPost from '../BlogPost/BlogPost';
import './BlogContainer.css';

const BlogContainer = () => {

  const [posts, setPosts] = useState([]);
  console.log(posts)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', marginTop: '67px',  paddingBottom: '20px' }}>
        <h1>Browse Post</h1>
        {
          posts.map(post => <BlogPost key={post.id} post={post}></BlogPost>)
        }
      </Container>
    </React.Fragment>
  );
};
export default BlogContainer;
