import { Grid } from '@material-ui/core'
import React , {useState , useEffect} from 'react'
import SelectForm from './SelectForm'
import axios from 'axios'
import MovieCard from './MovieCard'

function solve(object , array) {
    let fee = array
    const helper = (ea , ko) =>  ko[1] == "earlier"  ?  ea < ko[0]  :   ea > ko[0] &&   ( ea < ko[1] ||  ko[1].length > 4 )
    for (const key in object) if (object[key] != "All") (fee = fee.filter(el => key == "history" ? helper(el[key] ,  object[key].split("-")) :el[key] == object[key])) 
    return fee
}

export default function Allmovie() {

    // state 
    const [movies , setMovies] = useState([])
    const [types , setTypes ] = useState({typee:"All" , history : "All" , gander : "All" })

    useEffect(()=>{
    axios.get("https://sei12.herokuapp.com/movei/json")
    .then(data => {
        setMovies(data.data) 
    })
    .catch(error => console.error(error))
    } , [])


    // useEffect(()=>{


    // } , [type])



// 
console.log(types)


    return (
        <Grid xs={12} container justify="center"  >
            <h1  style={{color: '#F5CB5C' , padding :20}} > All Movie Page </h1>
            <Grid xs={12} container justify="center" >
             { Object.entries(types).map(ele =>
             <SelectForm 
            type = {ele[0]}
            movies ={movies}
            setType={setTypes}
            /> ) }
       
            </Grid>
            <Grid  justify="center" style={{marginTop: 40}} container>
        {solve(types , movies) 
        .map(movie => <MovieCard  movie={movie} />)}
            </Grid>
        </Grid>
    )
}
