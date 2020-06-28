import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { ingredientListSchema, convertToIntermediateDataIngredients } from "../../schema";

export const fetchIngredients = createAsyncThunk(
  "ingredient/fetchIngredients",
  async (arg, thunkAPI) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
    );
    const data = await response.json();
    const intermediateData = convertToIntermediateDataIngredients(data);
    const normalized = normalize(intermediateData.drinks, ingredientListSchema);
    return normalized.entities;
  }
);

export const ingredientAdapter = createEntityAdapter();

const initialState = ingredientAdapter.getInitialState();

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      console.log(action.payload)
      ingredientAdapter.upsertMany(state, action.payload.ingredient);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = ingredientSlice.actions;


export const {
  selectById: selectIngredientById,
  selectIds: selectIngredientIds,
  selectEntities: selectIngredientEntities,
  selectAll: selectAllIngredient,
  selectTotal: selectTotalIngredient,
} = ingredientAdapter.getSelectors((state) => state.ingredient);

const { reducer } = ingredientSlice;
export default reducer;
