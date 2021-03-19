import React, { useContext, useEffect, useCallback } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
import { ICategory } from '../../context/category/types';
import { CategoryItem } from '../CategoryItem';

export const CategoriesList = () => {
  const { categories, fetchCategories } = useContext(CategoryContext);

  const loadCategories = useCallback(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      {categories.map((category: ICategory, i: number) => (
        <CategoryItem
          key={category.id}
          category={category}
        />
      ))}
    </>
  );
};
