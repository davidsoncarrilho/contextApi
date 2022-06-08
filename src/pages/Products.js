// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/UseCounterContext";

const Products = () => {
  // const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Products</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Products;