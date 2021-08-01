import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {    
    return (
        <Card className="expenses">
            <ExpenseItems title={props.expenses[0].title} price={props.expenses[0].price} date={props.expenses[0].date}/>
            <ExpenseItems title={props.expenses[1].title} price={props.expenses[1].price} date={props.expenses[1].date}/>
            <ExpenseItems title={props.expenses[2].title} price={props.expenses[2].price} date={props.expenses[2].date}/>
            <ExpenseItems title={props.expenses[3].title} price={props.expenses[3].price} date={props.expenses[3].date}/>
        </Card>
    )
}

export default Expenses;