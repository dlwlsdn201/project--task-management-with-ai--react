import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p data-testid='count'>Count: {count}</p>
      <button onClick={increment} data-testid='increment-btn'>
        Increment
      </button>
      <button onClick={decrement} data-testid='decrement-btn'>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
