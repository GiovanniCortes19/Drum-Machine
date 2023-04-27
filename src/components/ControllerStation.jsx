import React from 'react'

const ControllerStation = (props) => {
  return (
    <div className='controllerStation'>
        <div className="power">
            <p>POWER</p>
            <div className={props.powerOn ? `btn-powerOn` : `btn-powerOff`} onClick={props.togglePower}>
                <div className="flicker"></div>
            </div>
        </div>
        <h2 id={props.powerOn ? 'display' : 'displayOff'}>{props.display}</h2>
        <div className='volumeControl'>
            <p>volume</p>
            <label htmlFor="customRange1"></label>
            <input type="range" className="form-range volRange" id="customRange1"></input>
        </div>
    </div>
  )
}

export default ControllerStation