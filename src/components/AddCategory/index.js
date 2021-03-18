import React, { useContext, useState } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
import { Text, Button, Input } from '../ui';

export const AddCategory = () => {
  const { addCategory } = useContext(CategoryContext);
  const [categoryTitle, setCategoryTitle] = useState('');

  const addCategoryHandler = (title) => {
    addCategory(title);
    setCategoryTitle('');
  };

  return (
    <>
      <Input
        placeholder="Название новой категории"
        value={categoryTitle}
        onChange={(e) => setCategoryTitle(e.target.value)}
      />
      <Button onClick={() => addCategoryHandler(categoryTitle)}>
        <Text>Добавить</Text>
      </Button>
    </>
  );
};
