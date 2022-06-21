import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useTopNavigation from '../hooks/useTopNavegation';
import useBottomNavigation from '../hooks/useBottomNavigation';

const RootElement = ({ children }) => {
  const topNavigation = useTopNavigation();
  const bottomNavigation = useBottomNavigation();

  return (
    <>
      <header>
        <nav>
          <ul>
            {topNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li key={index}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            {bottomNavigation.map((item, index) => {
              const { url, title } = item;
              return (
                <li key={index}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default RootElement;