import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyles } from './components/GlobalStyles';
import { Header } from './components/Header';
import { TransactionState } from './context/transaction/TransactionState';
import { CategoryState } from './context/category/CategoryState';

import { Container } from './components/Container';
import { Routes } from './routes';

const App = () => {
    return (
        <BrowserRouter basename="/">
            <CategoryState>
                <TransactionState>
                    <GlobalStyles />
                    <Header />

                    <Container>
                        <Routes />
                    </Container>
                </TransactionState>
            </CategoryState>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
