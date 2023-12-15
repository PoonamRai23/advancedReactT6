import React, { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm=()=>{
const [enteredTitle,setEnteredTitle]=useState('');
const [enteredAmount,setEnteredAmount]=useState('');
const [enteredDate,setEnteredDate]=useState('');


   const  titleChangeHandler = (event) => { 
      //console.log(event.target.value);
      setEnteredTitle(event.target.value);

};
const amountChangeHandler = (event) => { 
   //console.log(event.target.value);
   setEnteredAmount(event.target.value);
};
const dateChangeHandler = (event) => { 
   //console.log(event.target.value);
   setEnteredDate(event.target.value);
};
const submitHandler=(event)=>{
   event.preventDefault();
   const expenseData={
      title:enteredTitle,
      amount:enteredAmount,
      dare:new Date(enteredDate)
      
   };
   console.log(expenseData)
};

    return (
    <form onSubmit={submitHandler}>

<div className='new-expense_controls'>
   <div className='new-expense_control'>
     <label>Title</label>
     <input type='text' onChange={titleChangeHandler }/>
</div>
<div className='new-expense_control'></div>
 <label>Amount</label>
 <input type='number' min="0.01" step="0.01"onChange={amountChangeHandler} />   
</div>

<div className='new-expense_control'></div>
   <label>Date</label>
   <input type='date' min="2019-01-01" max="2-12-31" onChange={dateChangeHandler}/> 
    
   </div> 
   </div> 

   <div className="new-expense_actions">

<button type="submit">Add Expense</button>

</div>


   </div>


</form>


);

};


export default ExpenseForm;