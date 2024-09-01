import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import SearchBar from './SearchBar'; // Import the SearchBar component

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
  }));

  useEffect(() => {
    filterRecipes(); // Ensure filtering happens when the component mounts
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar /> {/* Add the SearchBar component */}
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Add EditRecipeForm and DeleteRecipeButton here */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
