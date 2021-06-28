import './App.css';
import ExpenseItem from "./components/ExpenseItem"

function App() {
  const expense = [
    {
      id: '1',
      title: 'Food',
      amount: 5000,
      date: new Date(2020,3,3)
    },
    {
      id: '2',
      title: 'grocery',
      amount: 7000,
      date: new Date(2020,6,23)
    },
    {
      id: '3',
      title: 'education',
      amount: 10000,
      date: new Date(2020,6,14)
    }
  ]

  return (
    <div className="App">
      <ExpenseItem id={expense[0].id} title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem id={expense[1].id} title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem id={expense[2].id} title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
    
    </div>
  );
}

export default App;
