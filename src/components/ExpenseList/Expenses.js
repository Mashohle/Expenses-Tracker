import React, { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [year, setYear] = useState('2020')

    const yearFilterHandler = (selectedYear) => {
        setYear(selectedYear)
    }

    const filteredExpense = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    });
                    
    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={year} 
                    onYearFiltered={yearFilterHandler}
                />
                <ExpensesList filteredExpense={filteredExpense}/>
            </Card>
        </li>
    )
}

export default Expenses;