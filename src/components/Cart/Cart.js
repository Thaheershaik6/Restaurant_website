import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-Context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  let totalAmount = 0;
  cartCtx.items.map((item) => {
    return totalAmount = totalAmount + Number(item.price);
  });
  totalAmount = totalAmount.toFixed(2);

  // let itemQuantity = 0;
  // cartCtx.items.forEach((item) => {
  //   if (item.id === 'm1') {
  //     itemQuantity = itemQuantity + Number(item.quantity);
  //   }
  // });

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>
          Name: {item.name} - Prise: {item.price} - Quantity: {item.quantity}
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amont</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
