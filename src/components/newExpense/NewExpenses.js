import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props)=>{
    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id : Math.random.toString()
        }

        props.onAddExpense(expenseData)
        // console.log(expenseData)
    }
    return (
        <ExpenseForm onSaveExpense={saveExpenseData}></ExpenseForm>
    )

}

export default NewExpenses