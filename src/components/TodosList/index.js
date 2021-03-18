import React, { useContext, useCallback } from 'react';
import { TransactionContext } from '../../context/transaction/transactionContext';
import { CategoryContext } from '../../context/category/categoryContext';

export const TodosList = () => {
  const { transactions, updateTransaction } = useContext(TransactionContext);
  const { categories } = useContext(CategoryContext);

  if (!transactions.length) {
    return <div>no transactions!</div>;
  }

  const categoryName = useCallback(
    (typeId) => {
      const d = categories.find((c) => c.id === typeId);
      return d ? d.title : typeId;
    },
    [categories]
  );

  return (
    <div>
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          onClick={() =>
            updateTransaction(transaction.id, transaction.typeId, 'hello!!!')
          }
        >
          {categoryName(transaction.typeId)}: {transaction.comment}
        </div>
      ))}
    </div>
  );
};
