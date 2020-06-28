import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/categorySlice';
import ingredientReducer from '../features/ingredient/ingredientSlice';
import drinkReducer from '../features/drinks/drinkSlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    ingredient: ingredientReducer,
    drink: drinkReducer,
  },
});
