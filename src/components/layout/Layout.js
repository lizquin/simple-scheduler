import MainNavigation from './MainNavigation';
import styles from './Layout.module.css';
import { FavoritesContextProvider } from '../../store/favorites-context';

function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
