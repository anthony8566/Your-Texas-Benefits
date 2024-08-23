import React from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ExpenseForm />
        <ExpenseList />
      </div>
    </div>
  );
}

export default App;
