import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: x => {},
  removeFavorite: x => {},
  isFavorite: x => {}
});

export function FavoritesContextProvider(props) {
  const [favoritesList, setFavoritesList] = useState([]);

  function addFavorite(meetup) {
    setFavoritesList(prevFavList => prevFavList.concat(meetup));
  }

  function removeFavorite(meetupId) {
    setFavoritesList(prevFaveList =>
      prevFaveList.filter(x => x.id !== meetupId)
    );
  }

  function isFavorite(meetingId) {
    return favoritesList.some(x => x.id === meetingId);
  }
  const context = {
    favorites: favoritesList,
    favoritesCount: favoritesList.length,
    addFavorite,
    removeFavorite,
    isFavorite
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
