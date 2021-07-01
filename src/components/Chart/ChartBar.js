import React from 'react'
import './ChartBar.css'

const ChartBar = (props)=>{
    let barHeight = '0%'
    if (props.max>0){
        barHeight = Math.round((props.value/props.max)*100)+'%'
    }
    return (
        <div>
            <div>
                <div style={{height:barHeight}}></div>
            </div>
            <div>{props.label}</div>
        </div>
    )

}

export default ChartBar