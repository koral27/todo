import React, { FC } from 'react';
import SearchInput from '../inputs/search-input';

import './header.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-flex">
            <button type="button" className="btn btn-outline-light">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-list"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                ></path>
              </svg>
            </button>
            <button type="button" className="btn btn-outline-light">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house-door"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <SearchInput src="/img/search-icon.svg" placeholder="Поиск" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
