import { useState } from 'react'

function StateFunction() {
  const [value,setValue] = useState(0)
  
  return (
    <div>
      <h3>Value:{value}</h3>
      <button onClick={
        ()=>setValue(value+1)
      }>Add</button>

      <button onClick={
        ()=>setValue(value-1)
      }>Sub</button>

      <button onClick={
        ()=>setValue(value+5)
      }>add5</button>

    </div>
  )
}


export default StateFunction
