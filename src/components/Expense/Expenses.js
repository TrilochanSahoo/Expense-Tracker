import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilterYear from './ExpenseFilterYear'
import './Expenses.css'

const Expenses = (props)=>{
    const [filterYear,setFilterYear] = useState('2021')

    function filterChangeHandler (selectYear){
        setFilterYear(selectYear)
        console.log(filterYear)
    }
    const filterExpense = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString()===filterYear
    })

    let content = <p>No item found. Want to add click on the add button...</p>

    if(filterExpense.length>0){
        content = filterExpense.map((item)=>
        {
            return (<ExpenseItem title={item.title} amount={item.amount} date={item.date}></ExpenseItem>)
        })
    }

    return (
        <Card className="expense">
            <ExpenseFilterYear onSelect={filterYear} onChange={filterChangeHandler}></ExpenseFilterYear>
            {content}
        </Card>
    )

}

export default Expenses