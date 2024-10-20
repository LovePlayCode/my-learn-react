import React, { createContext, memo, useContext, useState } from "react";

// 创建上下文
const MyContext = createContext();

const ChildComponent = () => {
  console.log("ChildComponent触发刷新...");
  const { value } = useContext(MyContext);
  return <h1>{value}</h1>;
};
const ChildComponent2 = () => {
  console.log("ChildComponent2触发刷新...");
  return <h1>这是Child2</h1>;
};

const Temp = memo(() => {
  return (
    <>
      <ChildComponent />
      <ChildComponent2 />
    </>
  );
});
const MyProvider = () => {
  const [count, setCount] = useState(42);

  return (
    <>
      <MyContext.Provider value={{ value: count, setValue: setCount }}>
        <Temp />
      </MyContext.Provider>
      <button
        onClick={() => {
          setCount(100);
        }}
      >
        改变
      </button>
    </>
  );
};

export default MyProvider;
