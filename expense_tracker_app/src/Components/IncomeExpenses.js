import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    
    // Map through transactions to get an array of amounts
    const amounts = transactions.map(transaction => transaction.amount);

    // Calculate income
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    // Calculate expense (convert to positive)
    const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1
        .toFixed(2);

    return (
        <div className="inc_exp_container">
            <div>
                <h4>Incomes</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">{expense}</p>
            </div>
        </div>
    );
}
