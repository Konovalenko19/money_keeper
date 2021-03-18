import React, { useContext, useState } from 'react';

import { CategoryContext } from '../../context/category/categoryContext';

import { Wrapper, Icon, Title } from './styled';

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(5));
}

export const CategoryItem = ({
  category,
  withEdit = false,
  withDelete = false,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(category.title);
  const { removeCategory, updateCategory } = useContext(CategoryContext);

  if (isEdit) {
    return (
      <div>
        <input
          type="text"
          placeholder="Название категории"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <a
          style={{ color: 'blue' }}
          onClick={() => {
            setTitle(category.title);
            setIsEdit(false);
          }}
        >
          Отмена
        </a>
        <a
          style={{ color: 'green' }}
          onClick={() => {
            updateCategory(category.id, title);
            setIsEdit(false);
          }}
        >
          Сохранить
        </a>
      </div>
    );
  }

  return (
    <Wrapper data-prevent-drag-scroll="true">
      <Icon colorIndex={getRandomInt()} />
      <Title>{category.title}</Title>
      {withEdit ? (
        <a style={{ color: 'blue' }} onClick={() => setIsEdit(true)}>
          Редактировать
        </a>
      ) : null}
      {withDelete ? (
        <a style={{ color: 'red' }} onClick={() => removeCategory(category.id)}>
          Удалить
        </a>
      ) : null}
    </Wrapper>
  );
};
