import { useState } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";

function App() {
    const [incomeTransactions, setIncomeTransactions] = useState([]);
    const [expenseTransactions, setExpenseTransactions] = useState([]);

    const addIncome = (incomeData) => {
        setIncomeTransactions([...incomeTransactions, incomeData]);
    };

    const addExpense = (expenseData) => {
        setExpenseTransactions([...expenseTransactions, expenseData]);
    };

    // Calculate total income and expenses
    const totalIncome = incomeTransactions.reduce(
        (acc, transaction) => acc + Number(transaction.amount),
        0
    );
    const totalExpenses = expenseTransactions.reduce(
        (acc, transaction) => acc + Number(transaction.amount),
        0
    );

    // Calculate balance
    const balance = totalIncome - totalExpenses;

    return (
        <div className="App">
            <header className="App-header">
                <h1>Income and Expense Tracker</h1>
            </header>
            <AppRouter addIncome={addIncome} addExpense={addExpense} />
            <div>
                <h2>All Transactions:</h2>
                <div>
                    <h3>Income Transactions:</h3>
                    <ul>
                        {incomeTransactions.map((transaction, index) => (
                            <li key={`income-${index}`}>
                                Description: {transaction.description}, Amount:{" "}
                                {transaction.amount}
                            </li>
                        ))}
                    </ul>
                    <p>Total Income: ${totalIncome}</p>
                </div>
                <div>
                    <h3>Expense Transactions:</h3>
                    <ul>
                        {expenseTransactions.map((transaction, index) => (
                            <li key={`expense-${index}`}>
                                Description: {transaction.description}, Amount:{" "}
                                {transaction.amount}
                            </li>
                        ))}
                    </ul>
                    <p>Total Expenses: ${totalExpenses}</p>
                </div>
                <div>
                    <h3>Balance:</h3>
                    <p>${balance}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
