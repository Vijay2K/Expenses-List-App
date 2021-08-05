import React, { useState } from 'react'
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpenseList from './ExpensesList'
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
