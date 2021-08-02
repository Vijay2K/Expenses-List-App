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
        <ExpenseItems
          title={props.expenses[0].title}
          price={props.expenses[0].price}
          date={props.expenses[0].date}
        />
        <ExpenseItems
          title={props.expenses[1].title}
          price={props.expenses[1].price}
          date={props.expenses[1].date}
        />
        <ExpenseItems
          title={props.expenses[2].title}
          price={props.expenses[2].price}
          date={props.expenses[2].date}
        />
        <ExpenseItems
          title={props.expenses[3].title}
          price={props.expenses[3].price}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  )
}

export default Expenses
