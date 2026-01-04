import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="text-2xl">
      <h1>{count}</h1>
      <button
        className="text-sm border mr-5 cursor-pointer"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="text-sm border mr-5 cursor-pointer"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="text-sm border mr-5 cursor-pointer"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Amount Increment
      </button>
    </div>
  );
};

export default App;
