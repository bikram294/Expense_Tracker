import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from '@material-ui/core';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import "./App.css";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  })

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
        <header className="App-header"> 
          <Switch onChange={handleDarkMode} value={darkMode}/>
          <h3>
            Expense Tracker
          </h3>
          <h5>Created by Bikramdeep Singh</h5>
        </header>
        </div>
      </CssBaseline>
    </ThemeProvider>
  
    
    
    </div>
  
  );
};

export default App;
