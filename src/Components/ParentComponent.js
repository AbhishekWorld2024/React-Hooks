import React, { useState,useCallback } from 'react'
import Title from './Title'
import Count from './Count'

function ParentComponent() {
  const [age, setAge] = useState(25)
  const [salary, setSalary] = useState(50000)

  const incrementAge = useCallback(() => { setAge(age + 1) },[age])
  const incrementSalary = useCallback(()=> { setSalary(salary + 1000) },[salary])

  return (
    <div>
      <Title />
      <Count text='age' count={age} />
      <button onClick={incrementAge}>Increment Age</button>
      <Count text='salary' count={salary} />
      <button onClick={incrementSalary}>Increment Salary</button>
    </div>
  )
}

export default ParentComponent
