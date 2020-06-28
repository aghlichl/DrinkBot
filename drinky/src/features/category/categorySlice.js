import { createSlice,createAsyncThunk,createEntityAdapter } from "@reduxjs/toolkit";
import { normalize } from "normalizr";
import { categoryListSchema, convertToIntermediateData } from "../../schema";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (arg, thunkAPI) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
    );
    const data = await response.json();
    const intermediateData = convertToIntermediateData(data);
    const normalized = normalize(intermediateData.drinks, categoryListSchema);
    return normalized.entities;
  }
);

export const categoryAdapter = createEntityAdapter();

const initialState = categoryAdapter.getInitialState();
//All questions will be answered here: https://redux-toolkit.js.org/tutorials/intermediate-tutorial

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: { },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      console.log(action.payload)
      categoryAdapter.upsertMany(state, action.payload.category);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
} = categorySlice.actions;


export const {
  selectById: selectCategoryById,
  selectIds: selectCategoryIds,
  selectEntities: selectCategoryEntities,
  selectAll: selectAllCategory,
  selectTotal: selectTotalCategory,
} = categoryAdapter.getSelectors((state) => state.category);

const { reducer } = categorySlice;
export default reducer;
