import { schema } from "normalizr";

export const category = new schema.Entity("category");
export const categoryListSchema = [category];



export function convertToIntermediateData(data) {
  let result = {
    drinks: data.drinks.map(e => ({
      strCategory: e.strCategory,
      id: e.strCategory
    }))
  };
  return result;
}

//Ingredient
export const ingredient = new schema.Entity("ingredient");
export const ingredientListSchema = [ingredient];

export function convertToIntermediateDataIngredients(data) {
    let result = {
      drinks: data.drinks.map(e => ({
        strIngredient1: e.strIngredient1,
        id: e.strIngredient1
      }))
    };
    return result;
  }
