import React from 'react'

function ButtonNeutral({ neutral, countNeutral }) {
    const handleClick = () => {
        countNeutral(neutral + 1)
    }
    return (
        <>
            <button onClick={handleClick}>Neutral</button>
        </>
    )
}

export default ButtonNeutral