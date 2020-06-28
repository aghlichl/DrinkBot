import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { fetchDrinksByIngredient, selectAllDrink } from "./drinkSlice";

export function Drinks() {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchDrinksByIngredient(id));
  }, []);

  let drinks = useSelector(state => selectAllDrink(state));
  console.log("DRINK", drinks);
  drinks = drinks.filter(d => d.ingredient === id);

  let history = useHistory();

  return (
    <div>
      <Jumbotron>
        <Button onClick={() => history.goBack()}>Back</Button>
        <h1>
          {id}
        </h1>
      </Jumbotron>
      <Container>
        {drinks.map(d => {
          return (
            <div key={d.id}>
              <div>
                {d.strDrink}
              </div>
              <img src={d.strDrinkThumb} width="100" height="100"></img>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
