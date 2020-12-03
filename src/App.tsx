import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="container-fluid p-0 h-100">
        <div className="row no-gutters h-100">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Content />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
