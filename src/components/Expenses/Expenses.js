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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItems
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
