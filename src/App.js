import React from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 12,
      title: 'Buyed course',
      price: 78,
      date: new Date(2021, 7, 28),
    },
    {
      id: 78,
      title: 'Food',
      price: 89,
      date: new Date(2021, 5, 9),
    },
    {
      id: 98,
      title: 'shirt',
      price: 54,
      date: new Date(2020, 31, 7),
    },
    {
      id: 51,
      title: 'Books',
      price: 25,
      date: new Date(2020, 12, 8),
    },
  ]

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  )
}

export default App
