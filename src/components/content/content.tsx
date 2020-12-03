import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { InboxPage } from '../../pages/inbox';
import { TodayPage } from '../../pages/today';

import './content.scss';

const Content: FC = () => {
  return (
    <main className="main-content">
      <Switch>
        <Route component={InboxPage} path="/" exact />
        <Route component={TodayPage} path="/today" exact />
      </Switch>
    </main>
  );
};

export default Content;
