import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setTile] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title : '',
    //     amonut : 0,
    //     date : ''
    // });

    const titleChangeHandler = (event) => {
        setTile(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // })
        // setUserInput((prevState) => {return {
        //     ...prevState, title: event.target.value
        // }});
        // console.log(userInput);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
        // setUserInput((prevState) => { return {
        //     ...prevState, amonut: event.target.value
        // }});
        // console.log(userInput);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
        // setUserInput((prevState) => {return {
        //     ...prevState, date: event.target.value
        // }})
        // console.log(userInput);
    }

    const resetForm = (event) => {
        event.preventDefault();
        setTile('');
        setDate('');
        setAmount('');
        props.onCancel();
        // setUserInput({
        //     title:'',
        //     amonut:0,
        //     date:''
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const ExpenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
            id: Math.random().toString()
        }
        //console.log("In expense Form");
        //console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
        resetForm(event);
       }
     
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} 
                value={enteredTitle}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.1" step="0.1" onChange={amountChangeHandler} 
                value={enteredAmount}></input>
            </div>
            <div className="new-expense__control">
                <label>Title</label>
                <input type="date" min="2019-01-01" max="2030-12-31" onChange={dateChangeHandler} 
                value={enteredDate}></input>
            </div>
            </div>
            <button type="submit">Add value</button>
            <button onClick={resetForm}>Cancel</button>
        </form>
    );
}

export default ExpenseForm;