import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadWidget from './Components/UploadWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className='main' >
        <div className="container">
          <h1 className="title">
            React &amp; Cloudinary Upload
          </h1>
          <div className='container'>
            <UploadWidget/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
