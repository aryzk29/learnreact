import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
    return (
        <Card className='expenses'>
            <h2>Let's get started!</h2>
            <ExpenseItem title={props.expenseItem[0].title} amount={props.expenseItem[0].amount} date={props.expenseItem[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenseItem[1].title} amount={props.expenseItem[1].amount} date={props.expenseItem[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenseItem[2].title} amount={props.expenseItem[2].amount} date={props.expenseItem[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenseItem[3].title} amount={props.expenseItem[3].amount} date={props.expenseItem[3].date}></ExpenseItem>
        </Card>
        
    )
}

export default Expenses