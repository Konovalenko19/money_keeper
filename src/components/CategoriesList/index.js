import React, { useContext, useEffect, useCallback } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';
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
    <div style={{ width: categories.length * 120 }}>
      {categories.map((category, i) => (
        <CategoryItem
          key={category.id}
          category={category}
          withEdit={false}
          withDelete
        />
      ))}
    </div>
  );
};
