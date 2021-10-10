import React from "react";

import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

function ExpensesList (props) {

    return ( 
        <ul className='expenses-list'>
            {props.filteredExpense.length === 0 
            ?   <h2 className="expenses-list__fallback">Found no Expenses</h2>
            :   props.filteredExpense.map(expense => 
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )}
        </ul>
    )
}

export default ExpensesList