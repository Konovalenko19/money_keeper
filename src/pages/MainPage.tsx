import React from 'react';
import { useHistory } from 'react-router-dom';

import { TextH1 } from '../components/Text';
import { CategoriesList } from '../components/CategoriesList';
// import { TodosList } from '../components/TodosList';

export const MainPage = () => {
  const history = useHistory();

  return (
    <>
      <TextH1>Доходы</TextH1>

      <button onClick={() => history.push('/login')}>go to login</button>

      <TextH1>Расходы</TextH1>
      <div>
        <CategoriesList />
      </div>
    </>
  );
};
