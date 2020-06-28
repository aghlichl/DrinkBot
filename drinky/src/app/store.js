import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/categorySlice';
import ingredientReducer from '../features/ingredient/ingredientSlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    ingredient: ingredientReducer,
  },
});
