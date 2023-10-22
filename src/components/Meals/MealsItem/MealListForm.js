import React, { useContext } from "react";

import Input from "../../UI/Input";
import classes from './MealListForm.module.css';
import CartContext from "../../../store/Cart-Context";

const MealsListForm = (props) => {

  const cartCtx = useContext(CartContext); 

  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById('amount_'+props.id).value
    cartCtx.addItem({...props.item, quantity: quantity})
    console.log('after', cartCtx)
  }
  return (
    <form className={classes.form}>
      {console.log(cartCtx.items)}
        <Input label='Amount' input={{
            id: 'amount_'+props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
        }} />
        <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealsListForm;
