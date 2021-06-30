import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props)=>{
    const [item,setItem] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')
    function changeNameHandler (event){
        setItem(event.target.value)
        // console.log(item)
    }
    function changeAmountHandler (event){
        setAmount(event.target.value)
        // console.log(item)
    }
    function changeDateHandler (event){
        setDate(event.target.value)
        // console.log(item)
    }

    function submitHandler(event){
        event.preventDefault()
        const expenseData = {
            title : item,
            amount : amount,
            date : new Date(date)
        }

        props.onSaveExpense(expenseData)
        // console.log(expenseData)
        setItem('')
        setAmount('')
        setDate('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type="text" placeholder="enter item name" value={item} onChange={changeNameHandler}></input>
                <input type="number" min='1' step="1" placeholder="enter amount" value={amount} onChange={changeAmountHandler}></input>
                <input type="date" min='2019-01-01' max='2022-12-31' value={date} onChange={changeDateHandler}></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm