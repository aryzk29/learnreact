import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let filteredExpense = props.expenseItem.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

    return (
        <div>  
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpense}/>
                <ExpenseList items={filteredExpense}/>
            </Card>
        </div>
        
        
    )
}

export default Expenses