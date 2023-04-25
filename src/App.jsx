import { useState } from 'react'
import SoundKey from './components/SoundKey'

function App() {


  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>
      <div id='display' className='drumBox-container'>
        {/* <div>SoundBoard</div> */}
        <SoundKey/>
        <div>ControllerStation</div>
      </div>
    </div>
  )
}

export default App
