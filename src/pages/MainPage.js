import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { Text } from '../components/ui';
import { CategoriesList } from '../components/CategoriesList';
import { AddCategory } from '../components/AddCategory';
import { AddTransaction } from '../components/AddTransaction';
import { TodosList } from '../components/TodosList';

export const MainPage = () => {
  return (
    <>
      <Text variant="h1">Доходы</Text>
      <ScrollContainer
        vertical={false}
        hideScrollbars={false}
        style={{ height: '120px' }}
        // onStartScroll={() => {
        //   document.getElementsByTagName('body')[0].style.cursor = 'pointer';
        // }}
        // onEndScroll={() => {
        //   document.getElementsByTagName('body')[0].style.cursor = 'default';
        // }}
        // ignoreElements="[data-prevent-drag-scroll]"
      >
        <CategoriesList />
      </ScrollContainer>
      <AddCategory />

      <hr />

      <Text variant="h1">Расходы</Text>
      <AddTransaction />
      <TodosList />
    </>
  );
};
