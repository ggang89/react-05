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

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const handlePlus = () => {
//     setCount(1);
//   };
//   const handleMinus = () => {
//     setCount(-1);
//   };
//   return (
//     <div className="counterBox">
//       <button onClick={handlePlus} className="btn">
//         +1
//       </button>
//       <h1 className="text">{0}</h1>
//       <button onClick={handleMinus} className="btn">
//         -1
//       </button>
//     </div>
//   );
// }

// export default function Counter() {
//   count = 1

//   const handlePlus = () => {
//     setCount(2);
//   };
//   const handleMinus = () => {
//     setCount(0);
//   };
//   return (
//     <div className="counterBox">
//       <button onClick={handlePlus} className="btn">
//         +1
//       </button>
//       <h1 className="text">{1}</h1>
//       <button onClick={handleMinus} className="btn">
//         -1
//       </button>
//     </div>
//   );
// }

// export default function Counter() {
//   count = 2

//   const handlePlus = () => {
//     setCount(3);
//   };
//   const handleMinus = () => {
//     setCount(1);
//   };
//   return (
//     <div className="counterBox">
//       <button onClick={handlePlus} className="btn">
//         +1
//       </button>
//       <h1 className="text">{2}</h1>
//       <button onClick={handleMinus} className="btn">
//         -1
//       </button>
//     </div>
//   );
// }