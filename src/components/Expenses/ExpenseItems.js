import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItems.css'

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('Udpated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>change item</button>
    </Card>
  )
}

export default ExpenseItems
