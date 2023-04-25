import React from 'react'
import SoundKey from './SoundKey'
import sounds from './sounds'

const SoundBoard = () => {

    const drumPads = sounds.map(sound => (
        <SoundKey
            key={sound.id}
            audio={sound.audio}
            keyID={sound.keyID}
            name={sound.name}
        />
    ))

  return (
    <div className='soundBoard'>
        {drumPads}
    </div>
  )
}

export default SoundBoard