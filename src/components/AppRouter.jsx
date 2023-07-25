import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import IncomeForm from "../pages/IncomeForm";
import ExpenseForm from "../pages/ExpenseForm";

// eslint-disable-next-line react/prop-types, no-unused-vars
const AppRouter = ({ addIncome, addExpense }) => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-item" : "pending-item"
                                }
                                to="/"
                            >
                                Income
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active-item" : "pending-item"
                                }
                                to="/expenses"
                            >
                                Expenses
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route
                        path="/"
                        element={<IncomeForm addIncome={addIncome} />}
                    />
                    <Route
                        path="/expenses"
                        element={<ExpenseForm addExpense={addExpense} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;
