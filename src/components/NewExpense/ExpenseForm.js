import React, {useState}from 'react';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
 

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
   const amountChangeHandler = (event) => {
     setEnteredAmount(event.target.value);
   };
   const dateChangeHandler = (event) => {
     setEnteredDate(event.target.value)
   };

   const submitHandler = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Do you want to add this expense',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');  
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   };
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Tilte</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
};
export default ExpenseForm;