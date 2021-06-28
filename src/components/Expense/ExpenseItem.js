import React from 'react'
import ExpanseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
    <Card className="expense-item">
        <ExpanseDate date={props.date}></ExpanseDate>
        <div className="expense-item-desc">
            <h2>{props.title}</h2>
            <div className="expense-item-price">{props.amount}</div>
        </div>
    </Card>)
}

export default ExpenseItem