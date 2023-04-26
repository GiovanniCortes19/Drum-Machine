import React from 'react'

const ControllerStation = () => {
  return (
    <div className='controllerStation'>
        <div className="power">
            <p>POWER</p>
            <div className="btn-power">
                <div className="flicker"></div>
            </div>
        </div>
        <h2 id='display'>Testing</h2>
        <div className='volumeControl'>
            <p>volume</p>
            <label htmlFor="customRange1"></label>
            <input type="range" className="form-range volRange" id="customRange1"></input>
        </div>
    </div>
  )
}

export default ControllerStation