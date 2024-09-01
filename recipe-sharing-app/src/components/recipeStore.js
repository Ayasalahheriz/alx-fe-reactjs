import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  setSearchTerm: (term) => set(state => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  setRecipes: (recipes) => set({ 
    recipes, 
    filteredRecipes: recipes 
  }),

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
  }),

  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
  }),

  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return { recipes: updatedRecipes, filteredRecipes: updatedRecipes };
  }),

  addFavorite: (recipeId) => set(state => {
    const updatedFavorites = [...state.favorites, recipeId];
    return { favorites: updatedFavorites };
  }),

  removeFavorite: (recipeId) => set(state => {
    const updatedFavorites = state.favorites.filter(id => id !== recipeId);
    return { favorites: updatedFavorites };
  }),

  generateRecommendations: () => set(state => {
    // Mock implementation for recommendations
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
