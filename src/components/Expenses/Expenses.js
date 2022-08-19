import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let filteredExpense = props.expenseItem.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

    let expenseContent = <p>No Expenses Found</p>

    if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map((expense) => 
        (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))
    }

    return (
        <div>  
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {expenseContent}
                {/* {filteredExpense.length === 0 && <p>No Expenses Found</p>}
                {filteredExpense.length > 0 && filteredExpense.map((expense) => 
                    (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>))} */}
            </Card>
        </div>
        
        
    )
}

export default Expenses