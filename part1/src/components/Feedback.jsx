import React from 'react'

function Feedback({ good, countGood, bad, countBad, neutral, countNeutral }) {
    const handleGood = () => {
        countGood(good + 1)
    }
    const handleBad = () => {
        countBad(bad + 1)
    }
    const handleNeutral = () => {
        countNeutral(neutral + 1)
    }
    return (
        <>
            <h1>Give Feedback</h1>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
        </>
    )
}

export default Feedback