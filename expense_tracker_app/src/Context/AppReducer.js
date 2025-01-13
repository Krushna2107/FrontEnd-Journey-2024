// AppReducer.js

export default (state, action) => {
   switch (action.type) {
       case 'DELETE_TRANSACTION':
           return {
               ...state,
               transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
           };
       case 'ADD_TRANSACTION': // Fix the action type
           return {
               ...state,
               transactions: [action.payload, ...state.transactions] // Add the new transaction to the list
           };
       default:
           return state;
   }
};
