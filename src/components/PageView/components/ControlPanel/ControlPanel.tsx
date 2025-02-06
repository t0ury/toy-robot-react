import React from 'react'

const ControlPanel = ({position, moveRobot, getPosition}) => {
  return (
    <div>
        <div className='control-robot'>
            <button onClick={() => moveRobot("Move")}>Move</button>
            <button onClick={() => moveRobot("Left")}>Left</button>
            <button onClick={() => moveRobot("Right")}>Right</button>
        </div>
        <div className="report-position">
            <button>Report</button>
            <input 
                style={{textAlign: "center"}}
                placeholder="(X, Y, F)"
                value={position} 
                readOnly={true}></input>
        </div>
    </div>
  )
}

export default ControlPanel