import React from 'react'
import { MovieList } from './MovieList'
import { SlidShow } from "./SlidShow"

export default function Home() {
    return (
        <div>
            {/* slidShow */}
            <SlidShow />
            <h1 style={{textAlign: 'center' , padding : 20 , color: '#F5CB5C' , fontFamily :"Helvetica"}}> POPULAR MOVIES </h1>
            <MovieList />

        </div>
    )
}

