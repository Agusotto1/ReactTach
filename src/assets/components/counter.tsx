import { useState } from "react";

export function Counter() {
  // Declaramos el estado count, inicializado en 10
  const [count, setCount] = useState(10);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </>
  );
}
