import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-Context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // let totalAmount = 0;
  // cartCtx.items.map((item) => {
  //   return totalAmount = totalAmount + Number(item.price);
  // });
  // totalAmount = `$${totalAmount.toFixed(2)}`;

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartAddItemHandler = (item) => {};

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartAddItemHandler.bind(null, item)}
        />
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
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
