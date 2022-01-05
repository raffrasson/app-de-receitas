import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [favorites, setFavorites] = useState(JSON
    .parse(window.localStorage.getItem('favoriteRecipes')));
  const [done, setDone] = useState(JSON
    .parse(window.localStorage.getItem('doneRecipes')));

  const values = {
    favorites,
    setFavorites,
    done,
    setDone,
    copy,
  };

  return (
    <div>
      <main>
        <AppContext.Provider value={ values }>
          {children}
        </AppContext.Provider>
      </main>
    </div>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};