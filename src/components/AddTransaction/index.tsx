import React, { useState, useContext } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
import { TransactionContext } from '../../context/transaction/transactionContext';

import { Select } from '../Select';
import { Input } from '../Input';
import { Button } from '../Button';
import { Text } from '../Text';

export const AddTransaction = () => {
  const { categories } = useContext(CategoryContext);
  const { addTransaction } = useContext(TransactionContext);
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');

  return (
    <>
      <Select options={categories} onChange={(value) => setCategory(value)} />

      <Input
        placeholder="transaction comment"
        value={comment}
        onChange={(e: any) => setComment(e.target.value)}
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
    </>
  );
};
