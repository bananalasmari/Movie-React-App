import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useHistory} from "react-router-dom"
// Yourname
// history 
// link
// name
// typee

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth:300,
    margin :30
  },
  media: {
    height: 240,
    backgroundPosition :"center",
    backgroundSize :"cover"
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const history = useHistory()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.movie.link}
          title="Contemplative Reptile"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movie.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {props.movie.YourName}
          </Typography>
          <p> {props.movie.history}</p>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.movie.typee}
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button 
      onClick={()=>history.push(`/allmovie/${props.movie._id}`)}
      variant="outlined">more Info </Button>

      </CardActions>
    </Card>
  );
}
