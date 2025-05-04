import React from 'react'
import StatisticsLine from './StatisticsLine'

function Statistics({ good, neutral, bad }) {
    let average = ((good * 1) + (neutral * 0) + (bad * -1) / (good + neutral + bad))
    let total = good + neutral + bad
    let positive = ((good) / total) * 100
    if (total === 0) {
        return (
            <>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <h1>Statistics</h1>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="neutral" value={neutral} />
            <p>Total {total}</p>
            <p>Average {average}</p>
            <p>Positive {positive} %</p>
        </>
    )
}

export default Statistics