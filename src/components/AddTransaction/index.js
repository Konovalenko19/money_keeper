import React, { useState, useContext } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
import { TransactionContext } from '../../context/transaction/transactionContext';

import { Select, Input, Button, Text } from '../ui';

export const AddTransaction = () => {
  const { categories } = useContext(CategoryContext);
  const { addTransaction } = useContext(TransactionContext);
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <Select options={categories} onChange={(value) => setCategory(value)} />

      <Input
        placeholder="transaction comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <Button
        onClick={() => {
          if (category && comment) {
            addTransaction(category, comment);
            setComment('');
          }
        }}
      >
        <Text>Добавить транзакцию</Text>
      </Button>
    </div>
  );
};
