import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './components/common/GlobalStyles';
import { Header } from './components/common/Header';
import { TransactionState } from './context/transaction/TransactionState';
import { CategoryState } from './context/category/CategoryState';

import { Container } from './components/common/Container';
// import { ROUTES } from './routes/consts';
import { Routes } from './routes';

const App = () => {
  // const routes = [
  //   { label: 'Main page', path: ROUTES.ROOT.PATH },
  //   { label: 'Profile page', path: ROUTES.PROFILE.PATH },
  // ];

  return (
    <BrowserRouter>
      <CategoryState>
        <TransactionState>
          <GlobalStyles />
          <Header />

          <Container flexDirection="column">
            <Routes />
          </Container>
        </TransactionState>
      </CategoryState>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
