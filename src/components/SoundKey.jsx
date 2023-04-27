import React from 'react'
import { useCallback } from 'react'

const SoundKey = (props) => {


  return (
    <div className='drum-pad' id={props.name} onClick={()=>{props.play()}}>
        <h3>{props.keyID}</h3>
        <audio src={props.audio} className='clip' id={props.keyID}></audio>
    </div>
  )
}

export default SoundKey