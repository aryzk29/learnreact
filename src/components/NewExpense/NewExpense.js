import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    const [startEditing, setStartEditing] = useState(false)

    function saveExpenseHandler(expenseData) {
        const newExpense = {
            ...expenseData,
            id: Math.random.toString()
        }
        props.onAddNewExpense(newExpense)
        setStartEditing(false)
    }

    function startEditingHandler() {
        setStartEditing(true)
    }

    function stopEditingHandler() {
        setStartEditing(false)
    }

    return (
        <div className='new-expense'>
            {!startEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {startEditing && <ExpenseForm onAddExpenseForm={saveExpenseHandler} onCloseEdit={stopEditingHandler}/>}
        </div>

    )
}

export default NewExpense