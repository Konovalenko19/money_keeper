import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';
import { ProfilePage } from '../pages/ProfilePage';
import { LoginPage } from '../pages/LoginPage';
import { ROUTES } from './consts';

const Fallback = () => <div>Загрузка...</div>;

export const Routes = () => (
    <Suspense fallback={Fallback}>
        <Switch>
            <Route path={ROUTES.LOGIN.PATH} component={LoginPage} />
            <Route path={ROUTES.PROFILE.PATH} component={ProfilePage} />
            <Route path={ROUTES.ROOT.PATH} component={MainPage} />
        </Switch>
    </Suspense>
);
