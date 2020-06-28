import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

window.store = store;
//https://github.com/paularmstrong/normalizr

//https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// Google the whys http://hgogonis.me/why-you-need-to-normalize-redux-data/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* input: 
{
  "drinks": [
    {
      "strCategory": "Ordinary Drink"
    },
    {
      "strCategory": "Cocktail"
    },
    {
      "strCategory": "Milk / Float / Shake"
    },
    {
      "strCategory": "Other/Unknown"
    },
    ...
*/

/* output: 
  "drinks": [
      {
        "id": "Ordinary Drink"
        "strCategory": "Ordinary Drink"
      },

*/

/*
{
    "drinks": [
        {
            "strCategory": "Ordinary Drink"
        },
        {
            "strCategory": "Cocktail"
        },
        {
            "strCategory": "Milk / Float / Shake"
        },
        {
            "strCategory": "Other/Unknown"
        },
        {
            "strCategory": "Cocoa"
        },
        {
            "strCategory": "Shot"
        },
        {
            "strCategory": "Coffee / Tea"
        },
        {
            "strCategory": "Homemade Liqueur"
        },
        {
            "strCategory": "Punch / Party Drink"
        },
        {
            "strCategory": "Beer"
        },
        {
            "strCategory": "Soft Drink / Soda"
        }
    ]
}
*/