import React from 'react'
import ControllerStation from './ControllerStation'
import SoundKey from './SoundKey'
import sounds from './sounds'

const SoundBoard = () => {

    const [display, setDisplay] = React.useState('example')
    const [powerOn, setPowerOn] = React.useState(true)

    function playSound (keyID, name) {
        if (powerOn) {document.getElementById(keyID).play();
        setDisplay(prev => name)}
    }

    function togglePower (){
        setPowerOn(prev => !prev)
    }

    const drumPads = sounds.map(sound => (
        <SoundKey
            key={sound.id}
            audio={sound.audio}
            keyID={sound.keyID}
            name={sound.name}
            play={()=>playSound(sound.keyID, sound.name)}
            powerOn={powerOn}
        />
    ))

  return (
    <>
        <div className='soundBoard'>
            {drumPads}
        </div>
        <ControllerStation display={display} powerOn={powerOn} togglePower={()=>togglePower()}/>
    </>
  )
}

export default SoundBoard