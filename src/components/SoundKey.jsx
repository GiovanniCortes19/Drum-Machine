import React from 'react'

const SoundKey = (props) => {

  React.useEffect(()=>{
    document.addEventListener('keydown', handleKeyPress);
    return () => {document.removeEventListener('keydown', handleKeyPress)}
  },[])

  const handleKeyPress = (event) => {
    if (event.keyCode === props.keyCode) {
      props.play()
    }
  }

  return (
    <div className={props.powerOn ? 'drum-pad' : 'drum-padOff'} id={props.name} onClick={()=>{
      document.getElementById(props.keyID).volume = props.volume;
      props.play()}}>
        <h3>{props.keyID}</h3>
        <audio src={props.audio} className='clip' id={props.keyID}></audio>
    </div>
  )
}

export default SoundKey