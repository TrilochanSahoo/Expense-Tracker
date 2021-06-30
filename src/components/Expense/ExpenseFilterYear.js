import React from 'react'
import './ExpenseFilterYear.css'

const ExpenseFilterYear = (props)=>{
    function dropDownYear(event){
        props.onChange (event.target.value)
    }
    return (
        <div>
            <div>
                <label>Filterd by Year</label>
                <select value={props.onSelect} onChange={dropDownYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilterYear