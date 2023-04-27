import React from 'react'
import ControllerStation from './ControllerStation'
import SoundKey from './SoundKey'
import sounds from './sounds'

const SoundBoard = () => {

    const [display, setDisplay] = React.useState('example')
    const [powerOn, setPowerOn] = React.useState(true)
    const [volume, setVolume] = React.useState(1)

    function playSound (keyID, name) {
        const audioTag = document.getElementById(keyID)
        if (powerOn) {
            audioTag.currentTime = 0;
            audioTag.play();
            setDisplay(prev => name)
    }
    }

    function togglePower (){
        setPowerOn(prev => !prev)
    }

    function volumeChange(event){
        setVolume(event.target.value)
    }

    const drumPads = sounds.map(sound => (
        <SoundKey
            key={sound.id}
            audio={sound.audio}
            keyID={sound.keyID}
            name={sound.name}
            play={()=>playSound(sound.keyID, sound.name)}
            powerOn={powerOn}
            volume={volume}
        />
    ))

  return (
    <>
        <div className='soundBoard'>
            {drumPads}
        </div>
        <ControllerStation
         display={display} 
         powerOn={powerOn} 
         volume={volume} 
         togglePower={()=>togglePower()}
         volumeChange={volumeChange}
         />
    </>
  )
}

export default SoundBoard