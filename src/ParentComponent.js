import React, { useContext, useState } from "react";
import CreateContext from "./CreateContext";

function GreatGrandchildComponent() {
  console.log('重新渲染了吗GreatGrandchildComponent...')
  return <div>Hi</div>;
}

function GrandchildComponent() {

  console.log('重新渲染了吗GrandchildComponent...')
  const value = useContext(CreateContext);
  return (
    <div>
      {value.a}
      <GreatGrandchildComponent />
    </div>
  );
}

function ChildComponent() {
  console.log('重新渲染了吗ChildComponent...')
  return <GrandchildComponent />;
}

const MemoizedChildComponent = React.memo(ChildComponent);

function ParentComponent() {
  const [a, setA] = useState(0);
  const [b, setB] = useState("text");
  const refFn = (event,a)=>{
    console.log(event,a)
  }
  const contextValue = { a, b };

  return (
    <>
      <CreateContext.Provider value={contextValue}>
        <MemoizedChildComponent />
      </CreateContext.Provider>
      <button
        ref={refFn}
        onClick={() => {
          setA("LHL");
        }}
      >
        调用setA
      </button>
    </>
  );
}
export default ParentComponent;
