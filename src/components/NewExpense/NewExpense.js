import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    function saveExpenseHandler(expenseData) {
        const newExpense = {
            ...expenseData,
            id: Math.random.toString()
        }
        props.onAddNewExpense(newExpense)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpenseForm={saveExpenseHandler} />
        </div>

    )
}

export default NewExpense