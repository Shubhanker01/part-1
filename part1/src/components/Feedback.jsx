import React from 'react'
import ButtonBad from './ButtonBad'
import ButtonNeutral from './ButtonNeutral'
import ButtonGood from './ButtonGood'
function Feedback({ good, countGood, bad, countBad, neutral, countNeutral }) {

    return (
        <>
            <h1>Give Feedback</h1>
            <ButtonGood good={good} countGood={countGood}></ButtonGood>
            <ButtonNeutral neutral={neutral} countNeutral={countNeutral}></ButtonNeutral>
            <ButtonBad bad={bad} countBad={countBad}></ButtonBad>
        </>
    )
}

export default Feedback