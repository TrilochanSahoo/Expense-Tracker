import React from 'react'
import './ExpenseDate.css'
const ExpanseDate = (props)=>{
    const day = props.date.toLocaleString('en-US',{day : '2-digit'})
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const year = props.date.getFullYear()
    return (
        <div className="expenseDate">
            <div className="expenseDay">{day}</div>
            <div className="expenseMonth">{month}</div>
            <div className="expenseYear">{year}</div>
        </div>
    )
}

export default ExpanseDate