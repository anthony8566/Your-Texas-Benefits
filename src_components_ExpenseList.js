import React from 'react';

function ExpenseList() {
  return (
    <div className="expense-list">
      <div className="expense-item">
        <span>Expense 1</span>
        <span>$100</span>
      </div>
      <div className="expense-item">
        <span>Expense 2</span>
        <span>$200</span>
      </div>
    </div>
  );
}

export default ExpenseList;
