import React from 'react'

export default function OneMovie(props) {

    console.log(props.match.params.id)
    const id = props.match.params.id
    return (
        <div>
            <h1>One Movie</h1>
            <h2 style={{color: '#fff'}}>{id}</h2>
        </div>
    )
}
