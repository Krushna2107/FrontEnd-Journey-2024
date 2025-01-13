import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li>
            {transaction.text} <span>{transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
};
