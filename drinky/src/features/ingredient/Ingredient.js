import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients, selectAllIngredient } from "./ingredientSlice";
import styles from "./Ingredient.module.css";
import { Container, Jumbotron, ListGroup, ListGroupItem } from "reactstrap";

export function Ingredient() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  let ingredients = useSelector((state) => selectAllIngredient(state));
  ingredients = ingredients.filter((i) => {
    
    const regex = RegExp('gin$|rum|vodka|whiskey|tequila|brandy', 'i');
      return regex.test(i.strIngredient1);
    }
    );
    ingredients.sort(compare);

  function compare(a, b) {
    if (a.strIngredient1 < b.strIngredient1) {
      return -1;
    }
    if (a.strIngredient1 > b.strIngredient1) {
      return 1;
    }
    return 0;
  }

  return (
    <div>
      <Jumbotron>
        <h1>Ingredients</h1>
      </Jumbotron>
      <Container>
        <ListGroup>
          {ingredients.map((c) => (
            <ListGroupItem key={c.id}>{c.strIngredient1}</ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}
