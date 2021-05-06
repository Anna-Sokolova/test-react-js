import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to={routes.main}
          exact
          // activeClassName={styles.NavLinkActive}
        >
          Main
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.stats}
          // className={styles.NavLink}
          // activeClassName={styles.NavLinkActive}
        >
          Stats
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.charts}
          // className={styles.NavLink}
          // activeClassName={styles.NavLinkActive}
        >
          Charts
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
