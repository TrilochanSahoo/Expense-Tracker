import React from 'react'
import './AnimationBox.css'

const AnimationBox = ()=>{
    return (
        <div className="box">
            <div className='square' style={{"--i":"0"}}></div>
            <div className='square' style={{"--i":"1"}}></div>
            <div className='square' style={{"--i":"2"}}></div>
            <div className='square' style={{"--i":"3"}}></div>
            <div className='square' style={{"--i":"4"}}></div>
        </div>
    )
}

export default AnimationBox