import React, { useState } from 'react';

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

function Expenses(props) {

  const [year, setYear] = useState('2020')

    const yearFilterHandler = (selectedYear) => {
        setYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                selected={year} 
                onYearFiltered={yearFilterHandler}
            />
            {   
                props.expenses
                    .filter(expense => expense.date.getFullYear().toString() === year)
                    .map(expense => 
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
            }
        </Card>
    )
}

export default Expenses;