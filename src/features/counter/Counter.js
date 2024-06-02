import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  selectCountMultiple,
  decrementByAmount,
  decrementIfOdd
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const countMultiple = useSelector(selectCountMultiple);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;
  const decrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <div className={styles.wrapperFlex}>
          <input
            className={styles.textbox}
            aria-label="multiple of 10"
            value={countMultiple}
            onChange={(e) => setIncrementAmount(e.target.value)}
            disabled 
          />
          <input
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </div>
        <div className={styles.wrapperGrid}>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementByAmount(incrementValue))}
          >
            Add Amount
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(incrementValue))}
          >
            Add Async
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementIfOdd(incrementValue))}
          >
            Add If Odd
          </button>


          <button
            className={styles.button}
            onClick={() => dispatch(decrementByAmount(decrementValue))}
          >
            Sub Amount
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(decrementIfOdd(decrementValue))}
          >
            Sub If Odd
          </button>
        </div>
      </div>
    </div>
  );
}
