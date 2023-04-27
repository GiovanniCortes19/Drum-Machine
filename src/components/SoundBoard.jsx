import React from 'react'
import ControllerStation from './ControllerStation'
import SoundKey from './SoundKey'
import sounds from './sounds'

const SoundBoard = () => {

    const [display, setDisplay] = React.useState('example')

    function playSound (keyID, name) {
        document.getElementById(keyID).play();
        setDisplay(prev => name)
    }

    const drumPads = sounds.map(sound => (
        <SoundKey
            key={sound.id}
            audio={sound.audio}
            keyID={sound.keyID}
            name={sound.name}
            play={()=>playSound(sound.keyID, sound.name)}
        />
    ))

  return (
    <>
        <div className='soundBoard'>
            {drumPads}
        </div>
        <ControllerStation display={display}/>
    </>
  )
}

export default SoundBoard