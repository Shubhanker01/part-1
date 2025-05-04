import React from 'react'

function ButtonBad({ bad, countBad }) {
    const handleClick = () => {
        countBad(bad + 1)
    }
    return (
        <div>
            <button onClick={handleClick}>Bad</button>
        </div>
    )
}

export default ButtonBad