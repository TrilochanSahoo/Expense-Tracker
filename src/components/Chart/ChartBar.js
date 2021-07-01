import React from 'react'
import './ChartBar.css'

const ChartBar = (props)=>{
    let barHeight = '0%'
    if (props.maxValue>0){
        barHeight = Math.round((props.value/props.maxValue)*100)+'%'
    }
    console.log(props.value)
    return (
        <div className='chartBar'>
            <div className='chartBarInner'>
                <div className='chartBarFill' style={{height:barHeight}}></div>
            </div>
            <div className='chartBarLabel'>{props.label}</div>
        </div>
    )

}

export default ChartBar