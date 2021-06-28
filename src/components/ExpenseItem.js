import React from 'react'
import ExpanseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
    <div className="expense-item">
        <ExpanseDate date={props.date}></ExpanseDate>
        <div className="expense-item-desc">
            <h2>{props.title}</h2>
            <div className="expense-item-price">{props.amount}</div>
        </div>
    </div>)
}

export default ExpenseItem