import React from 'react';
import useRecipeStore from '../recipeStore';

const FavoritesList = () => {
  const { recipes, favorites } = useRecipeStore(state => ({
    recipes: state.recipes,
    favorites: state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean)
  }));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
