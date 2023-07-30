/* eslint-disable react/prop-types */

import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // <div aria-live="polite" className="visually-hidden">{tenzies ? "Congratulatio" : ""}</div>
  return (
    <div aria-live="polite">
      <button role="button" className={classes.button} onClick={props.onClick} aria-label="Shopping cart">
        <span className={classes.icon} aria-hidden={true}>
          <CartIcon />
        </span>
        <span className={classes.badge} aria-hidden={true}>{numberOfCartItems}</span>
        <span className={classes['sr-only']} aria-live="polite">
          You have {numberOfCartItems} items in your cart.
        </span>
      </button>
    </div>
  );

};


export default HeaderCartButton;