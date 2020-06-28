import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { drinkListSchema, convertToIntermediateDataDrinkName } from "../../schema";

export const fetchDrinksByIngredient = createAsyncThunk(
  "drink/fetchDrinksByIngredient",
  async (ingredient, thunkAPI) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    const intermediateData = convertToIntermediateDataDrinkName(data);
    const normalized = normalize(intermediateData.drinks, drinkListSchema);
    return {entities: normalized.entities, ingredient};
  }
);

export const drinksAdapter = createEntityAdapter();

const initialState = drinksAdapter.getInitialState();

export const drinkSlice = createSlice({
  name: "drink",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchDrinksByIngredient.fulfilled]: (state, action) => {
      console.log("PAYLOAD", action.payload.entities)
      // action.payload.entities = action.payload.entities.drink.forEach(e => e);
      Object.keys(action.payload.entities.drink).forEach(d => {
        action.payload.entities.drink[d].ingredient = action.payload.ingredient;
      })
      
      drinksAdapter.upsertMany(state, action.payload.entities.drink);
    },
  },
});


export const {
  selectById: selectDrinkById,
  selectIds: selectDrinkIds,
  selectEntities: selectDrinkEntities,
  selectAll: selectAllDrink,
  selectTotal: selectTotalDrink,
} = drinksAdapter.getSelectors((state) => state.drink);

const { reducer } = drinkSlice;
export default reducer;
