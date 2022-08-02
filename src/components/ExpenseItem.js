import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28)
    const expenseItem = 'Car Insurance'
    const expensePrice = 999.99

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{expenseItem}</h2>
                <div className='expense-item__price'>${expensePrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem