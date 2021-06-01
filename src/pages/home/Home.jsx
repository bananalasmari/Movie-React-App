import React from 'react'
import { MovieList } from './MovieList'
import { SlidShow } from "./SlidShow"

export default function Home() {
    return (
        <div>
            {/* slidShow */}
            <SlidShow />

            <h2 style={{textAlign: 'center'}}> PAPUALER MOVIES </h2>

            <MovieList />

        </div>
    )
}

