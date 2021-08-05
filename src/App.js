import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

// const INITIAL_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Buyed course',
//     price: 78,
//     date: new Date(2021, 7, 28),
//   },
//   {
//     id: 'e2',
//     title: 'Food',
//     price: 89,
//     date: new Date(2021, 5, 9),
//   },
//   {
//     id: 'e3',
//     title: 'shirt',
//     price: 54,
//     date: new Date(2019, 31, 7),
//   },
//   {
//     id: 'e4',
//     title: 'Books',
//     price: 25,
//     date: new Date(2021, 12, 8),
//   },
// ]

const App = () => {
  const [expenses, setExpenses] = useState([])

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
