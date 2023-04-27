import { useState } from 'react'
import SoundBoard from './components/SoundBoard'
// import ControllerStation from './components/ControllerStation'


function App() {


  return (
    <div id='drum-machine'>
      <h1 className='title'>Drum Machine</h1>
      <div id='drumBox' className='drumBox-container'>
        <SoundBoard/>
      </div>
    </div>
  )
}

export default App
