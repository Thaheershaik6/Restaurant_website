import React, { Fragment, useContext } from "react";

import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  // let numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount
  // }, 0)
  let quantity = 0;
  cartCtx.items.forEach(item => {
    quantity = quantity + Number(item.quantity)
  })

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        {/* {cartCtx.message} */}
        <span className={classes.badge}>{quantity}</span>
          {/* {numberOfCartItems}</span> */}
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
