import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import './BlogPost.css';

const useStyles = makeStyles({
  root: {
    width: 550,
    borderTop: '5px solid #192e4d',
  },
  media: {
    height: 140,
  },
  btn: {
    backgroundColor: '#fff',
    padding: '5px',
    fontWeight: 'bold',
    border: '1px solid #192e4d',
    borderRadius: '3px',
    margin: '2px',
  },
  textStyle: {
    color: '#192e4d',
    textDecoration: 'none',
  },
  title: {
    textTransform: 'capitilize',
  },
  body: {
    textAlign: 'justify',
  },
});

const BlogPost = (props) => {
  const { id, title, body } = props.post;
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ marginBottom: '10px' }}>
      <IconButton>
        <BorderColorIcon />
      </IconButton>
      <b>Post ID: {id}</b>
      <CardContent>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.body} variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>
          <Link className={classes.textStyle} to={`/post/details/${id}`}>See More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
export default BlogPost;
