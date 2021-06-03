import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
      color : "#333533"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      color : "#333533"
    },
    label :{
        color : "#333533"
    } , 
    selectMenu :{
        color : "#333533"
    }
  }));


export default function SelectForm(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
      props.setType(pre => ({...pre , [props.type] :event.target.value }))
    };


    // movies
    const history = ["2020-later" , "2010-2019", "2000-2009" , "1999-earlier"]
    const types = props.type == "history" ? history  : [ ...new Set(props.movies.map(ele => ele[props.type]))]
    return (
        <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
        <Select
          style={{ backgroundColor: "#F5CB5C" }}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
          classes = {classes}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {types.map(ele =>   <MenuItem value={ele}>{ele}</MenuItem>)}

        </Select>
      </FormControl>
    )
}
