import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ExpenseForm = ({ addExpense }) => {
    const [expenseData, setExpenseData] = useState({
        description: "",
        amount: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpenseData({
            ...expenseData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addExpense(expenseData);
        setExpenseData({
            description: "",
            amount: "",
        });
    };

    return (
        <div>
            <h1>Expense Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={expenseData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={expenseData.amount}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
