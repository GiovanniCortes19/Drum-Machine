import SoundBoard from './components/SoundBoard'

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
