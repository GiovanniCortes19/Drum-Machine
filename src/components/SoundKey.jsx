import React from 'react'

const SoundKey = (props) => {

    function playSound () {
        document.getElementById(props.keyID).play()
    }

  return (
    <div className='drum-pad' id={props.name} onClick={playSound}>
        <h3>{props.keyID}</h3>
        <audio src={props.audio} className='clip' id={props.keyID}></audio>
    </div>
  )
}

export default SoundKey