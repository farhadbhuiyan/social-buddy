import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', marginTop: '67px', paddingBottom: '20px' }}>
        <div className="not-found">
          <div className="error-code">404!</div>
            <div className="message-1">THE PAGE</div>
            <div className="message-2">WAS NOT FOUND</div>
            <Link className="btn" to="/home">BACK TO Home Page</Link>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;