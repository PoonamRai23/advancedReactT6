// App.js
import React, { useState } from 'react';
import ExpenseDetails from './components/Expenses/ExpenseDetails';
import NewExpense from './components/NewExpenses/NewExpense';

import './components/Expenses/ExpenseItem.css'
import ExpenseItem from './components/Expenses/ExpenseItem';

const App=()=> {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 9, 13),
      title: "Food",
      amount: 50,
      locationOfExpenditure: "Hotel",
    },
    {
      id: 'e2',
      date: new Date(2023, 9, 13),
      title: "Petrol",
      amount: 100,
      locationOfExpenditure: "Petrol Pump",
    },
    {
      id: 'e3',
      date: new Date(2023, 9, 13),
      title: "Movies",
      amount: 200,
      locationOfExpenditure: "Inox",
    }
  ];
  const ExpenseItem=(props)=>{
const title=props.title

const updatedExpense=()=>{
  title='100$'
  console.lod(title)
}
  }
  }
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}/>
    </div>
  );


export default App;
