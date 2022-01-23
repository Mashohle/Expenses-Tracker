import React, { useState } from 'react';

// Import children components
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// Initial demo expenses data
const INIT_EXP = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {

  /*
    useState is a Hook that allows you to have state variables in functional components.
    You pass the initial state to this function and it returns a variable with the current 
    state value (not necessarily the initial state) and another function to update this value.
  */
  const [expenses, setExpenses] = useState(INIT_EXP)

  // Appends newly added expense to the expenses state variable
  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [
        expenseData, ...prevExpenses
      ]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
