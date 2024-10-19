import { useState } from "react";
import CreateDemo from "./CreateContext";
import Son from "./Son";
import Son2 from "./Son2";
const DemoLhl = () => {
  console.log("DemoLhl");
  const [name, setName] = useState("lhl");
  return (
    <>
      <CreateDemo.Provider value={{ name: name, setName: setName }}>
        <Son />
        <Son2 />
      </CreateDemo.Provider>
      <button
        onClick={() => {
          setName("sss");
        }}
      >
        点击触发name改变
      </button>
    </>
  );
};
export default DemoLhl;
