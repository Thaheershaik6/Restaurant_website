import React from "react";

import classes from "./MealsList.module.css";
import MealsListForm from "./MealListForm";

const MealsList = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsListForm id={props.id} item={props}></MealsListForm>
      </div>
    </li>
  );
};

export default MealsList;
