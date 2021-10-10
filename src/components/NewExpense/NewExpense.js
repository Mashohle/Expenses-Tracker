import React, { useState } from "react";

import './NewExpense.css';
import './ExpenseForm'
import ExpenseForm from "./ExpenseForm";



const NewExpense = (props) => {

    const [open, setOpen] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
        setOpen(false)
    }

    const toggleFormHandler = () => {
        setOpen(true)
    }
    
    const onCancelFormHandler = () => {
        setOpen(false)

    }
    return (
        open 
            ?   <div className='new-expense'>
                    <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancelForm={onCancelFormHandler}/>
                </div>
            :   <div className='new-expense'>
                    <button onClick={toggleFormHandler}>Add New Expense</button>
                </div>

        
    )
}

export default NewExpense