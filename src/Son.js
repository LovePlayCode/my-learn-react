import { useContext } from "react";
import CreateDemo from "./CreateContext";

const Son = () => {
  const { name } = useContext(CreateDemo);
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};
export default Son;
