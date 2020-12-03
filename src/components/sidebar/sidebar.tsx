import React, { FC } from 'react';
import TopFilters from './top-filters/top-filters';

import './sidebar.scss';

const Sidebar: FC = () => {
  return (
    <aside className="sidebar">
      <TopFilters />
    </aside>
  );
};

export default Sidebar;
