import React, { FC } from 'react';

import { ICategory } from '../../context/category/types';
import { Avatar } from '../Avatar';
import { Wrapper, Title } from './styled';

interface IProps {
  category: ICategory;
}

export const CategoryItem: FC<IProps> = ({ category }) => {
  return (
    <Wrapper data-prevent-drag-scroll="true">
      <Avatar />
      <Title>{category.title}</Title>
    </Wrapper>
  );
};
