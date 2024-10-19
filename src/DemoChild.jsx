import { useState } from "react";
import Child from "./Child";

const DemoChild = ({ children }) => {
  const [count, setCount] = useState(1);
  return (
    <>
      {children}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
    </>
  );
};
export default DemoChild;
