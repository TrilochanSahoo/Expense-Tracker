import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=>{
    return (
        <form>
            <div>
                <input type="text" placeholder="enter item name"></input>
                <input type="number" min='1' step="1" placeholder="enter item name"></input>
                <input type="date" min='2019-01-01' max='2022-12-31'></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm