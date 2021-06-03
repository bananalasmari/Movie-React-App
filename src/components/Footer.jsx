import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import TheatersIcon from '@material-ui/icons/Theaters';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import {useHistory  } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: "100%",
    background : "#333533", 
  },
  label:{
      color : "#F5CB5C"
  }
});

export default function Footer(props) {
  const history = useHistory()
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <footer style ={{ position: "fixed" , bottom: 0  , width: "100%"  , zIndex: 9999}}>


    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        
      <BottomNavigationAction 
      classes={classes}
      label="Home" 
      onClick = {()=> history.push('/')}
      icon={<HomeIcon 
      style={{fill: "#F5CB5C"}}

      />} />




      <BottomNavigationAction 
      classes={classes}
      label="Movies" 
      onClick = {()=> history.push('/allmovie')}
      
      icon={<TheatersIcon
       style={{fill: "#F5CB5C"}}

      />} />

     { !props.isLogin ?
    <BottomNavigationAction 
      classes={classes}
      label="login" 
      onClick = {()=> history.push('/login')}
      icon={<PersonIcon 
        style={{fill: "#F5CB5C"}}

      />} /> : 


      <BottomNavigationAction
      classes={classes}
      label="Profile"
      onClick = {()=> history.push('/profile')}
      icon={<PersonIcon 
       style={{fill: "#F5CB5C"}}
      />} />
}
    </BottomNavigation>

    


    </footer>
  );
}
