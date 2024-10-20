import { useState, useReducer, memo, useCallback } from "react";

function Son({ click }) {
  console.log("触发刷新");
  return <h1>我是子组件</h1>;
}
const MemoSon = memo(Son, () => {
  return true;
});
export { Son };
/**
 *
 * useState
 */
// export default () => {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       useState
//       {count}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         改变count
//       </button>
//       <Son />
//     </>
//   );
// };

/**
 *
 * useReducer
 */

export default ({ children }) => {
  const [count, forceRender] = useReducer((c) => c + 1, 0);
  const click = () => {};
  const newClick = useCallback(click, []);
  return (
    <>
      useReducer
      {count}
      <button
        onClick={() => {
          forceRender(count + 1);
        }}
      >
        改变count
      </button>
      <Son key={1} />
      <MemoSon click={click} />
      {children}
    </>
  );
};
