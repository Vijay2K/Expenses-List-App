import React, { useState } from 'react'
import ExpenseItems from './ExpenseItems'
import ExpenseFilter from './ExpensesFilter'
import Card from '../UI/Card'
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
        {filteredExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
