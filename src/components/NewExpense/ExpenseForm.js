import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // setUserInput(prevState => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }

    function amountChangeHandler(event) {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // setUserInput(prevState => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }

    function dateChangeHandler(event) {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // setUserInput(prevState => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    }

    function submitHandler(event) {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        props.onAddExpenseForm(expenseData)

        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense___controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button onClick={props.onCloseEdit}>Close</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm