import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenses) => {
    const expenseData = {
      ...enteredExpenses,
      id: Math.random().toString(),
    }

    props.onAddExpenseData(expenseData)
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onEditing={stopEditingHandler}
        />
      )}
    </div>
  )
}

export default NewExpense
