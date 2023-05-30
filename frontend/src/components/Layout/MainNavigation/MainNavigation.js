import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import NewsletterSignup from '../../NewsletterSignup/NewsletterSignup';

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
           <li>
            <NavLink to="/newsletter" className={({ isActive }) => isActive ? classes.active : undefined }>Newsletter</NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
