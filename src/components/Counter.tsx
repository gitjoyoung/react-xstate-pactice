import { useMachine } from "@xstate/react";
import { countMachine } from "../machines/counterMachine";

export const Counter = () => {
  const [state, send] = useMachine(countMachine);

  return (
    <div>
      <h1>Count: {state.context.count}</h1>
      <button onClick={() => send({ type: "INC" })}>+</button>
      <button onClick={() => send({ type: "DEC" })}>-</button>
      <button onClick={() => send({ type: "SET", value: 10 })}>
        Set to 10
      </button>
    </div>
  );
};
