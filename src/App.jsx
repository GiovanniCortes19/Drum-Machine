import { useState } from 'react'
import SoundBoard from './components/SoundBoard'
import SoundKey from './components/SoundKey'

function App() {


  return (
    <div id='drum-machine'>
      <h1 className='title'>Drum Machine</h1>
      <div id='display' className='drumBox-container'>
        <SoundBoard/>
        {/* <SoundKey/> */}
        <div>ControllerStation</div>
      </div>
    </div>
  )
}

export default App
