import React, { useReducer } from 'react';
import { TransactionContext } from './transactionContext';
import { transactionReducer } from './transactionReducer';
import {
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  REMOVE_TRANSACTION,
} from '../types';

export const TransactionState = ({ children }) => {
  const initialState = {
    transactions: [
      {
        id: 1,
        typeId: 'deds',
        comment: 'lorem ipsum dolor set amet it delfo',
      },
      {
        id: 2,
        typeId: 'fcd',
        comment: 'lorem ipsum',
      },
    ],
  };
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const addTransaction = (typeId, comment) =>
    dispatch({ type: ADD_TRANSACTION, typeId, comment });

  const updateTransaction = (id, typeId, comment) =>
    dispatch({ type: UPDATE_TRANSACTION, id, typeId, comment });

  const removeTransaction = (id) => dispatch({ type: REMOVE_TRANSACTION, id });

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        updateTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
