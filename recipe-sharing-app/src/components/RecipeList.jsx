import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import useRecipeStore from '../recipeStore'; // Adjust path as necessary

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
  }));

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link> {/* Link to recipe details */}
          </h3>
          <p>{recipe.description}</p>
          {/* Add EditRecipeForm and DeleteRecipeButton here */}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
