import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing,setEditing] = useState(false);

    const addExpense = expense => {
       // console.log("In new Expesne");
       // console.log(expense);
        props.onAddNewExpense(expense);
    }

    const hideForm = () => {
        setEditing(!isEditing);
    }

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={hideForm}>Add New Expense</button>}
        {isEditing && <ExpenseForm onAddExpense={addExpense} onCancel={hideForm}></ExpenseForm>}
    </div>
    );
}

export default NewExpense;