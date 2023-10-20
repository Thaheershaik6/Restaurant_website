import React from "react";

import classes from './MealListForm.module.css';

const MealsListForm = (props) => {
  return (
    <form className={classes.form}>
      <div >
        <label>Amount</label>
        <input type="number" defaultValue='1' step='1' />
      </div>
      <button>+Add</button>
    </form>
  );
};

export default MealsListForm;
