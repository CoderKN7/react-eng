import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Dobby" btnTxt="Expand" />
      <Card username="Dolly"  btnTxt="More!!"/>
    </>
  )
}

export default App
