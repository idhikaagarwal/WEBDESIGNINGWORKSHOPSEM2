import React from 'react'
import Props from './components/Props'
import Demo from './components/Demo'

const App = () => {
  return (
    <>
    <div>App</div>
    <Props name="abc" rollno="123" branch="a"/>
    <Demo/>
    </>
  )
}

export default App