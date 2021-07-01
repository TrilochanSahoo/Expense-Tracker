import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props)=>{
    const [editing,setEditing] = useState(false)
    const saveExpenseData = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id : Math.random.toString()
        }

        props.onAddExpense(expenseData)
        // console.log(expenseData)
        setEditing(false)
    }

    const startEditing = ()=>{
        setEditing(true)
    }

    const stopEditting = ()=>{
        setEditing(false)
    }
    return (
        <div className="newExpense">
            {!editing && (
                <button onClick={startEditing}>Add New Expense</button>
            )}
            {editing && (
                <ExpenseForm 
                    onSaveExpense={saveExpenseData}
                    onCancel={stopEditting}
                ></ExpenseForm>
            )}
        </div>
    )

}

export default NewExpenses