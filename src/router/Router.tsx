import { Route, Switch } from 'react-router-dom';
import MainPage from '@components/Pages/Main/Main';
import AccompanyPage from '@components/Pages/Accompany/Accompany';
import React from 'react';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
      <Route path="/accompany" component={AccompanyPage} />
    </Switch>
  );
};

export default Router;
