import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from './component/Props'

function App() {
  const name = 'React JS library'

  return (
    <>
      <h1>hello (name) </h1>
      <Props name='Abhay rollno="2503201000576" course="B.Rech"/>
    </>
  )
}
export default App
