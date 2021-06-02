import React , {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios"
import Alert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



// =======================================================
// our components 
export default function Register() {
  const classes = useStyles(); // for style the page 
  const history= useHistory() 
// state
const [user , setUser] = useState({}); // {}
const [flage , setFlage] = useState(false); //
const [success , setSuccess] = useState(false); 
const [message , setMessage] = useState("")
//
// use Effect 

const userChangeHandler =  (e) => {
    let name = e.target.name
    let value = e.target.value
     setUser({...user , [name] :value })
}

const userOnsubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/v1/user/' , 
    {name : user.name , email : user.email , password : user.password})
    .then(data => {
        setFlage(true)
        setMessage(data.data.message)
        setSuccess(true)
        console.log(data)
        setTimeout(() => history.push('/login') , 2000)
        
    }).catch(error => {
        setMessage(error.response.data.message)
        setFlage(true)
        setSuccess(false)
        console.log(error)
    })
}


// methods



  return (

    <Container component="main" maxWidth="xs">
         { flage && 
         ( success ? <Alert severity="success">{message}</Alert> : 
       <Alert severity="error">{message}</Alert> )
    } 

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate
        onSubmit={(e) => userOnsubmitHandler(e)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                {/* name  */}
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label=" Name"
                autoFocus
                onChange={(e)=>userChangeHandler(e)}
              />
            </Grid>
      
            <Grid item xs={12}>
                {/* email */}
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>userChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
                {/* password */}
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e)=>userChangeHandler(e)}
              />
            </Grid>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// if (name == "name") {
//     let data = user
//     data.name = value
//     setUser(data)
// }else if (name == "email"){
//     let data = user
//     data.email = value
//     setUser(data)
// } else if (name == "password"){
//     let data = user
//     data.password = value
//     setUser(data)
// }


// let object = {name : "yasir"};


// let person = {...object , age : 30}
// console.log(person)