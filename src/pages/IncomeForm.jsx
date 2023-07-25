import { useState } from "react";

// eslint-disable-next-line react/prop-types
const IncomeForm = ({ addIncome }) => {
    const [incomeData, setIncomeData] = useState({
        description: "",
        amount: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncomeData({
            ...incomeData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addIncome(incomeData);
        setIncomeData({
            description: "",
            amount: "",
        });
    };

    return (
        <div>
            <h1>Income Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={incomeData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={incomeData.amount}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Income</button>
            </form>
        </div>
    );
};

export default IncomeForm;
