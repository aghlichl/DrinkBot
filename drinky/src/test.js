const normalizr = require("normalizr");
const normalize = normalizr.normalize;
const schema = normalizr.schema;

let originalData = {
  drinks: [
    {
      strCategory: "Ordinary Drink",
    },
    {
      strCategory: "Cocktail",
    },
    {
      strCategory: "Milk / Float / Shake",
    },
  ],
};

function convertToIntermediateData(data) {
  let result = {
    drinks: data.drinks.map(e => ({
      strCategory: e.strCategory,
      id: e.strCategory
    }))
  };
  return result;
}

let intermediateData = convertToIntermediateData(originalData);

console.log(JSON.stringify(intermediateData));

const category = new schema.Entity("category");

const categoryListSchema = [category]; //use shorthand

const normalizedData = normalize(intermediateData.drinks, categoryListSchema);
console.log(JSON.stringify(normalizedData,null, 2));

// https://github.com/paularmstrong/normalizr

/*
{"entities":{"users":{"1":{"id":"1","name":"Paul"},"2":{"id":"2","name":"Nicole"}},"comments":{"324":{"id":"324","commenter":"2"}},"articles":{"123":{"id":"123","author":"1","title":"My awesome blog post","comments":["324"]}}},"result":"123"}
*/
