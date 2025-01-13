// AddTransaction.js

import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // Access addTransaction from GlobalContext
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount, // Convert amount to a number
        };

        addTransaction(newTransaction); // Add the new transaction to the global state

        // Clear the input fields after submission
        setText('');
        setAmount(0);
    };

    return (
        <>
            <h3>Add New Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter Text...." 
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expenses, positive - income)</label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter Amount...." 
                    />
                </div>
                <button className="btn" type="submit">Add</button>
            </form>
        </>
    );
};
