import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import NewExpenses from './components/newExpense/NewExpenses';

const demoExpense = [
  {
    id: '1',
    title: 'Food',
    amount: 5000,
    date: new Date(2020, 3, 3)
  },
  {
    id: '2',
    title: 'grocery',
    amount: 7000,
    date: new Date(2020, 6, 23)
  },
  {
    id: '3',
    title: 'education',
    amount: 10000,
    date: new Date(2020, 6, 14)
  }
]

function App() {
  const [expense,setExpense]= useState(demoExpense)

  const addExpenses = (event)=> {
    setExpense((previousExpense)=>[event, ...previousExpense])
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenses}></NewExpenses>
      <Expenses items={expense}></Expenses>

    </div>
  );
}

export default App;
