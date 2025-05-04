import React from 'react'

function ButtonGood({good,countGood}) {
  const handleClick = () => {
      countGood(good+1)
  }
  return (
    <>
      <button onClick={handleClick}>Good</button>
    </>
  )
}

export default ButtonGood