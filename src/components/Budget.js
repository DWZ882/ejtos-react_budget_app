import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = ExpenseTotal();
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("You cannot exceed a value higher than 20000 !");
        } else if (event.target.value < totalExpenses) {
            console.log(totalExpenses)
            alert("The budget cannot be lower than the spending !");
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;