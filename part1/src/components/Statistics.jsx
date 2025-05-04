import React from 'react'

function Statistics({ good, neutral, bad }) {
    return (
        <>
            <h1>Statistics</h1>
            <p>Good {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
        </>
    )
}

export default Statistics