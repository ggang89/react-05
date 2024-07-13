import { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="counterBox">
      <button onClick={handlePlus} className="btn">
        +1
      </button>
      <h1 className="text">{count}</h1>
      <button onClick={handleMinus} className="btn">
        -1
      </button>
    </div>
  );
}
