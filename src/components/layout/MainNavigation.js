import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetup App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              favorites {favoritesContext.favoritesCount}
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">new meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
