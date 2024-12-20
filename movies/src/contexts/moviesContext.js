import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  const [upcoming, setUpcomiong] = useState([])
  const addToUpcoming = (movie) => {
    let newUpcoming = [];
    if (!upcoming.includes(movie.id)){
      newUpcoming = [...upcoming, movie.id];
    }
    else{
      newUpcoming = [...upcoming];
    }
    setUpcomiong(newUpcoming)
    console.log(newUpcoming);
  };

  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };
  const [myReviews, setMyReviews] = useState( {} ) 
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        addToUpcoming,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;