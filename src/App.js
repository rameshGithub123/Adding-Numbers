import "./styles.css";
import { useState } from "react";

export default function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const handleChangeA = (event) => {
    setA(+event.target.value);
  };
  const handleChangeB = (event) => {
    setB(+event.target.value);
  };

  return (
    <div className="App">
      <input type="number" value={a} onChange={handleChangeA} />
      <input type="number" value={b} onChange={handleChangeB} />
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
  );
}
