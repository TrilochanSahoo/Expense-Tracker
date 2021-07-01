import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props)=>{
    const chartData = props.dataSets.map((data)=>data.value)
    const maxAmount = Math.max(...chartData)
    return (
        <div>
            {props.dataSets.map((dataSet)=>{
                return (
                    <ChartBar key={dataSet.label} value={dataSet.value} maxValue={maxAmount} label={dataSet.label}></ChartBar>
                )
            })}
        </div>
    )

}

export default Chart