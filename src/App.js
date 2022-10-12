import Expenses from "./components/Expenses/Expenses";

import "./App.css";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const INITIAL_EEXPENSES = [
    {
      id:"e1",
      title: "Car insurance",
      amount: 276.78,
      date: new Date(2022, 1, 1),
    },
    {
      id:"e5",
      title: "New TV",
      amount: 543.78,
      date: new Date(2022, 4, 5),
    },
    {
      id:"e2",
      title: "Stationary",
      amount: 27.38,
      date: new Date(2020, 8, 2),
    },
    {
      id:"e3",
      title: "Transport",
      amount: 76.23,
      date: new Date(2021, 7, 3),
    },
    {
      id:"e4",
      title: "Book",
      amount: 76.23,
      date: new Date(2019, 11, 3),
    }
  ];

  const [expenses, setExpense] = useState(INITIAL_EEXPENSES)

  const addExpenseHandler = expense =>
  {
    // console.log(expense);
    // console.log(expenses);
    setExpense((prevState) =>
    ([
      ...prevState,
      expense
    ]));
    // console.log(expenses);
    // console.log("OK");
  }

  return (
    <div className="App-header">
      <h2>Start</h2>
      <NewExpense onAddNewExpense={addExpenseHandler} />      
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
