import React from 'react'
import ExpenseItems from './ExpenseItems'
import './ExpensesList.css'

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  )
}

export default ExpensesList
