import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
function MainNavigation() {
  return (
    <header className={classes.Header}>
      <nav>
        <ul className={classes.List}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.Active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({isActive}) => isActive ? classes.Active : undefined} end>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
