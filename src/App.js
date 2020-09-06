import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import BlogContainer from './components/BlogContainer/BlogContainer';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/home">
          <BlogContainer />
        </Route>
        <Route exact path="/">
          <BlogContainer />
        </Route>
        <Route exact path="/post/details/:postId">
          <PostDetails />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
