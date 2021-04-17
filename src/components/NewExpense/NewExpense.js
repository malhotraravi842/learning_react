import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [flag, setFlag] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };


  if (!flag) {
    return (
      <div className="new-expense">
        <button className="button" type="button" onClick={() => setFlag(true)}>
          Add New Expense
        </button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm setFlagData={setFlag} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }
};

export default NewExpense;
