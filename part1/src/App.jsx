import { useState } from "react"
import Feedback from "./components/Feedback"
import Statistics from "./components/Statistics"
function App() {
  const [good, countGood] = useState(0)
  const [neutral, countNeutral] = useState(0)
  const [bad, countBad] = useState(0)

  return (
    <>
      <Feedback good={good} countGood={countGood} neutral={neutral} countNeutral={countNeutral} bad={bad} countBad={countBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
