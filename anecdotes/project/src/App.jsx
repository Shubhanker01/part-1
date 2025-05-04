import { useState } from "react"

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let min = 0
  let max = anecdotes.length - 1
  let generateRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  let [selected, setSelected] = useState(generateRandomNumber)
  let [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })
  // to show random quote on clicking
  const handleClick = () => {
    setSelected(generateRandomNumber)
  }
  // function to update value of votes
  const vote = (property) => {
    let copy = { ...votes }
    copy[`${property}`] += 1
    setVotes(copy)
  }
  // find the key with max votes
  const maxVotes = () => {
    let max = -1
    let keyOfVote = -1
    for (let key in votes) {
      if (votes[key] > max) {
        max = votes[key]
        keyOfVote = key
      }
    }
    console.log(max)
    return keyOfVote
  }
  console.log(generateRandomNumber)
  console.log(votes)
  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} has {votes[`${selected}`]} votes
      </div>
      <button onClick={() => vote(selected)}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p> {anecdotes[maxVotes()]} has {votes[maxVotes()]} votes</p>
      </div>
    </>
  )
}

export default App
