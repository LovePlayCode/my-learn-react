import { useState } from "react";

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
