import FavoritesContext from '../store/favorites-context';
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList/MeetupList';

function Favorites() {
  const favoritesContext = useContext(FavoritesContext);

  const favorites = favoritesContext.favorites;
  let content = '';
  if (favoritesContext.favoritesCount === 0) {
    content = 'No Favorites. Add some!';
  } else {
    content = <MeetupList meetings={favoritesContext.favorites}></MeetupList>;
  }
  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}

export default Favorites;
