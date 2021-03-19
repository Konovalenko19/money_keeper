import React, { useContext, useState } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
import { Button } from '../Button';
import { Text } from '../Text';
import { Input } from '../Input';

export const AddCategory: React.FC = () => {
  const { addCategory } = useContext(CategoryContext);
  const [categoryTitle, setCategoryTitle] = useState('');

  const addCategoryHandler = (title: string) => {
    addCategory(title);
    setCategoryTitle('');
  };

  return (
    <>
      <Input
        placeholder="Название новой категории"
        value={categoryTitle}
        onChange={(e: any) => setCategoryTitle(e.target.value)}
      />
      <Button onClick={() => addCategoryHandler(categoryTitle)}>
        <Text>Добавить</Text>
      </Button>
    </>
  );
};
