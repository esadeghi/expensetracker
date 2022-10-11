import React,{ useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card/Card"

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filteredExpenses = props.items.filter(element => element.date.getFullYear().toString() 
  === filteredYear)

  const content = filteredExpenses.length === 0 ? <p>No Item!</p> : (
    filteredExpenses.map(element => (
    <ExpenseItem
    key={element.id}
    title={element.title}
    price={element.amount}
    date={element.date}
  ></ExpenseItem>
  )));
  const changeYarHandler = selectedYear => {
      setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseFilter selected={filteredYear} onChangeYear={changeYarHandler} />
      {content}
      {/* <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      ></ExpenseItem> */}
    </Card>
  );
}

export default Expenses;
