import React from 'react';

import './header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <button className="waves-effect waves-light btn-small">
        <i className="material-icons">dehaze</i>
      </button>
      <button className="waves-effect waves-light btn-small">
        <i className="material-icons">home</i>
      </button>
    </header>
  )
}

export default Header;