/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './BookItemForm.module.css';

const BookItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 3
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };


  return (
    <form className={classes.form} onSubmit={submitHandler}>
       <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '3',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>Add to cart</button>
      {!amountIsValid && <p>Please enter a valid amount (1-3).</p>}
    </form>
  );
};

export default BookItemForm;






