import { Grid } from '@material-ui/core'
import React , {useState , useEffect} from 'react'
import SelectForm from './SelectForm'
import axios from 'axios'
import MovieCard from './MovieCard'

export default function Allmovie() {

    // state 
    const [movies , setMovies] = useState([])
    const [type , setType ] = useState("All")

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
console.log(type)


    return (
        <Grid xs={12} container justify="center"  >
            <h1  style={{color: '#F5CB5C' , padding :20}} > All Movie Page </h1>
            <Grid xs={12} container justify="center" >
            <SelectForm 
            movies ={movies}
            setType={setType}
           
            />
            </Grid>
            <Grid  justify="center" style={{marginTop: 40}} container>
            
       {/* .filter(ele =>  type == "All" || ele.typee == type) */}
       {/* true  */}
        {movies.filter(ele =>  type == "All" || ele.typee == type) 
        .map(movie => <MovieCard  movie={movie} />)}
            </Grid>
       

        </Grid>
    )
}
