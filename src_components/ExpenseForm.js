import React from 'react';

function ExpenseForm() {
  return (
    <div className="form-container">
      <h2>Add New Expense</h2>
      <form>
        <input className="form-input" type="text" placeholder="Expense Title" />
        <input className="form-input" type="number" placeholder="Amount" />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
