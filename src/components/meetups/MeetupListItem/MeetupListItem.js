import React, { useContext } from 'react';
import styless from './MeetupListItem.module.css';
import Card from '../../ui/Card';
import FavoritesContext from '../../../store/favorites-context';

const MeetupListItem = props => {
  const favoritesContext = useContext(FavoritesContext);
  const isFavorite = favoritesContext.isFavorite(props.id);

  function toggleFavorites() {
    if (isFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image
      });
    }
  }

  return (
    <li className={styless.item} key={props.id}>
      <Card>
        <div className={styless.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={styless.content}>{props.title}</div>
        <div className={styless.actions}>
          <button onClick={toggleFavorites}>
            {isFavorite ? 'Favorited' : 'Add to Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupListItem;
