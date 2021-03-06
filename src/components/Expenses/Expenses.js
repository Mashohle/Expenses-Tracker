import React, { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

    // Filtered year state variable
    const [year, setYear] = useState('2020')

    const yearFilterHandler = (selectedYear) => {
        setYear(selectedYear)
    }

    // Filters the expenses to display based on the filtered year
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
                <ExpensesChart expenses={filteredExpense} />
                <ExpensesList filteredExpense={filteredExpense} />
            </Card>
        </li>
    )
}

export default Expenses;